echo Commit message?
read msg
echo ""
echo Branch name?
read branch
echo ""
git branch "$branch"
git add -A
git commit -m "$msg"
git push origin "$branch"