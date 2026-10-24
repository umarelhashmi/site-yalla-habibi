#!/usr/bin/env bash
# ==============================================================================
# YALLA HABIBI · RESTAURANT & DINNER SHOW — DEPLOYMENT SCRIPT
# Target Host: https://yallahabibi.aviaorlando.com
# ==============================================================================
set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-root@38.49.218.214}"
DEPLOY_PATH="${DEPLOY_PATH:-/home/kvtjfIhctlu/web/yallahabibi.aviaorlando.com/public_html/}"

echo "Deploying Yalla Habibi static site to ${DEPLOY_HOST}:${DEPLOY_PATH}..."
rsync -avz --delete \
  --exclude '.git' \
  --exclude '.DS_Store' \
  --exclude '._*' \
  --exclude 'deploy.sh' \
  ./ "${DEPLOY_HOST}:${DEPLOY_PATH}"

ssh "${DEPLOY_HOST}" "chown -R kvtjfIhctlu:kvtjfIhctlu /home/kvtjfIhctlu/web/yallahabibi.aviaorlando.com/public_html && find /home/kvtjfIhctlu/web/yallahabibi.aviaorlando.com/public_html -type d -exec chmod 755 {} + && find /home/kvtjfIhctlu/web/yallahabibi.aviaorlando.com/public_html -type f -exec chmod 644 {} +"
echo "Deployment complete -> https://yallahabibi.aviaorlando.com"
