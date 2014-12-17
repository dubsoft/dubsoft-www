for image in `ls *.png`
do
  mv $image old-$image
  pngcrush -reduce -brute old-$image $image
  rm old-$image
done
