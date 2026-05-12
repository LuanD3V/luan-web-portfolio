#!/bin/bash
input=$(cat)
file=$(echo "$input" | jq -r '.path // empty')

if [ -z "$file" ]; then
  exit 0
fi

biome_config="biome.json"
if [ ! -f "$biome_config" ]; then
  exit 0
fi

extensions=$(jq -r '.files.includes[]?' "$biome_config" 2>/dev/null \
  | sed -E -n 's/.*\*\.([a-zA-Z0-9]+)$/\1/p' \
  | paste -sd '|' -)

if [ -z "$extensions" ]; then
  exit 0
fi

if [[ "$file" =~ \.($extensions)$ ]]; then
  npx biome format --write "$file" 2>/dev/null
fi

exit 0
