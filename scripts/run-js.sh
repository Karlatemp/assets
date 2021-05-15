if [ ! -f scripts/bootstrap.js ]; then
    git clone "https://github.com/Karlatemp/assets.git" "kar-assets"
    node kar-assets/scripts/bootstrap.js
    exit $?
fi

node scripts/bootstrap.js
