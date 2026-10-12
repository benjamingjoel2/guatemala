#!/usr/bin/env bash
# Build a static preview of the site into ./out (API routes are excluded;
# forms simulate submission). Usage: BASE_PATH=/guatemala scripts/build-static.sh
set -euo pipefail
cd "$(dirname "$0")/.."
stash=".api-static-stash"
mv app/api "$stash"
trap 'mv "$stash" app/api' EXIT
rm -rf out
STATIC_EXPORT=1 NEXT_PUBLIC_STATIC_PREVIEW=1 npx next build
touch out/.nojekyll
echo "Static site written to ./out"
