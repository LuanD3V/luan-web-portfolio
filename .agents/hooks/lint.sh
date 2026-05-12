#!/bin/bash
input=$(cat)
file=$(echo "$input" | jq -r '.path // empty')

if [ -z "$file" ]; then
  exit 0
fi

if [[ "$file" =~ \.(ts|tsx|js|jsx|cjs)$ ]]; then
  output=$(npx biome lint "$file" 2>&1)
  if [ $? -ne 0 ]; then
    echo "{\"additional_context\": \"Biome lint encontrou problemas em $file:\\n$output\"}"
    exit 0
  fi
fi

exit 0
