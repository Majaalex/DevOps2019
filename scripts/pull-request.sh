echo Commit message?
read msg
echo ""
echo Branch name?
read branch
echo ""
git add -A
git commit -m "$msg"
git push origin "$branch"