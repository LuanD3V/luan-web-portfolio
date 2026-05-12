#!/bin/bash
input=$(cat)
file=$(echo "$input" | jq -r '.path // empty')

if [ -z "$file" ]; then
  exit 0
fi

if [[ "$file" =~ \.(ts|tsx|js|jsx|cjs|json|css)$ ]]; then
  npx biome format --write "$file" 2>/dev/null
fi

exit 0
