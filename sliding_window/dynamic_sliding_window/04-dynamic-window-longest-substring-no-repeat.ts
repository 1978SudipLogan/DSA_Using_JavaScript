const str:string="caadaab";
type ReturnType=string
function longestSubstring(str:string):string{
    if(str.length===0)
        return "String is empty"
    let left=0,start=0,maxLen=0;
const set=new Set<String>()
    for(let right=0;right<str.length;right++){
         
        while(set.has(str[right])){
            set.delete(str[left])
            left++;
        }

        set.add(str[right])
          console.log(set);

        const currentLen=right-left+1;
        if(maxLen<currentLen){
            maxLen=currentLen;
            start=left;
        }
    }
return str.slice(start,start+maxLen)
}
const result:ReturnType=longestSubstring(str)
console.log(result)
export {}