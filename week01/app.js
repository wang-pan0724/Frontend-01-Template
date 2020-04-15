var fs = require('fs');
var path = require('path');//解析需要遍历的文件夹
var filePath = path.resolve('./ent');
//调用文件遍历方法
fileDisplay(filePath);
//文件遍历方法
function fileDisplay(filePath){
    //根据文件路径读取文件，返回文件列表
    fs.readdir(filePath,function(err,files){
        if(err){
            console.warn(err)
        }else{
            //遍历读取到的文件列表
            let resultArr = []
            files.forEach(function(filename){
                //获取当前文件的绝对路径
                var filedir = path.join(filePath, filename);
                fs.stat(filedir,function(eror, stats){
                    if(eror){
                        console.warn('获取文件stats失败');
                    }else{
                        var isFile = stats.isFile();
                        var isDir = stats.isDirectory();
                        if(isFile){
                            var content = fs.readFileSync(filedir, 'utf-8');
                            let ENTITYReg = /ENTITY([\s\S]*?)"&#/g;
                            let noteReg = /<!--([\s\S]*?)-->/g;
                            content = content.replace(noteReg, '')
                            let ENTITYArr = content.match(ENTITYReg);
                            console.log(ENTITYArr)
                            let entityContent = dealEntity(ENTITYArr)
                            resultArr = [...resultArr, ...entityContent]
                            writeText(resultArr.join('\n'))
                        }
                        
                        if(isDir){
                            fileDisplay(filedir);
                        }
                    }
                })
            });

        }
    });
}

function writeText(result){
    var fWriteName = './entityList.json';
    fs.writeFileSync(fWriteName, result);
}

function dealEntity(arr){
    let newArr = []
    arr.forEach(function(item){
        newArr.push(item.split(' ')[1])
    })
    return newArr;
}
