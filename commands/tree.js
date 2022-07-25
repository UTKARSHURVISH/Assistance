
function treeFn(dirPath)
{
    
    console.log("Tree command Implemented for",dirPath);
    //let destPath;

        if(dirPath == undefined)
        {
            treeHelper(process.cwd(),"");
            return;
        }
        else
        {
            let doesExist = fs.existsSync(dirPath);
            if (doesExist)
            {
               treeHelper(dirPath, "");
            }
            else
            {
                console.log("Kindly enter the Correct Path");
                return;
            }
        }

}

function treeHelper(dirPath ,indent)
{
    let isFile =fs.lstatSync(dirPath).isFile();
    if(isFile==true)
    {
       let fileName= path.basename(dirPath);
       console.log(indent+ "|-->>"+ fileName);
    }
    else
    {
        let dirName=path.basename(dirPath);
        console.log(indent + "|___"+ dirName);
       let childrens = fs.readdirSync(dirPath);
       for(let i=0; i<childrens.length; i++)
       {
            let childPath=path.join(dirPath,childrens[i]);
            treeHelper(childPath,indent + "\t");
       }
    }
}
module.exports=
{
    treeKey: treeFn
}