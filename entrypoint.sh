# add node_modules/.bin to PATH
export PATH=/app/node_modules/.bin:$PATH

i18nexus pull -k ${NEXT_PUBLIC_I18NEXUS_API_KEY} -p src/locales

yarn run dev
