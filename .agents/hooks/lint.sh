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
  output=$(npx biome lint "$file" 2>&1)
  if [ $? -ne 0 ]; then
    jq -n --arg ctx "Biome lint encontrou problemas em $file:\n$output" \
      '{additional_context: $ctx}'
    exit 0
  fi
fi

exit 0
