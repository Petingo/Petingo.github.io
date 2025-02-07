for entry in pages/*.pug;
do
    echo $entry
    if [[ $entry == *"index"* || $entry == *"about"* || $entry == *"CV"* ]] ; then
        pug $entry --out ../
    else
        pug $entry --out ../projects
    fi
done