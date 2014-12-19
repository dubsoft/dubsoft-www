set1=`ls *.png > set1`
set2="_crush.manifest"
images=$(LC_ALL='C' sort -n $set2 $set2 set1 | uniq -u)
echo $images
for image in $images
do
  mv $image old-$image
  pngcrush -reduce -brute old-$image $image
  rm old-$image
  echo $image >> $set2
done
rm set1
