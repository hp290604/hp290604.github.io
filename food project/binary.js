//BINARY SEARCH 
let a=[1,4,5,6,7,8,34,66]
let l=0,r=a.length-1
while(l<=r){
    let mid=l+Math.ceil((r-l)/2)
    if(a[mid]==34){
        console.log(mid); break
    }
    else if(a[mid]>34)r=mid-1
    else l=mid+1
}