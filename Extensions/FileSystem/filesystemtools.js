var gdjs;(function(s){const g=new s.Logger("Filesystem");let p;(function(n){n._path=null,n._fs=null,n._getPath=function(){return n._path||(n._path=typeof require!="undefined"?require("path"):null),n._path},n._getFs=function(){return n._fs||(n._fs=typeof require!="undefined"?require("fs"):null),n._fs},n.getDirectoryName=function(t){const e=s.fileSystem._getPath();return e?e.dirname(t):""},n.getFileName=function(t){const e=s.fileSystem._getPath();return e?e.basename(t):""},n.getExtensionName=function(t){const e=s.fileSystem._getPath();return e?e.extname(t):""},n.getDesktopPath=function(t){const e=t.getGame().getRenderer().getElectronRemote(),r=e?e.app:null;return r&&r.getPath("desktop")||""},n.getDocumentsPath=function(t){const e=t.getGame().getRenderer().getElectronRemote(),r=e?e.app:null;return r&&r.getPath("documents")||""},n.getPicturesPath=function(t){const e=t.getGame().getRenderer().getElectronRemote(),r=e?e.app:null;return r&&r.getPath("pictures")||""},n.getExecutablePath=function(t){const e=t.getGame().getRenderer().getElectronRemote(),r=e?e.app:null;return r&&r.getPath("exe")||""},n.getExecutableFolderPath=function(t){const e=s.fileSystem._getPath(),r=s.fileSystem.getExecutablePath(t);return e?e.dirname(r):""},n.getUserdataPath=function(t){const e=t.getGame().getRenderer().getElectronRemote(),r=e?e.app:null;return r&&r.getPath("userData")||""},n.getUserHomePath=function(t){const e=t.getGame().getRenderer().getElectronRemote(),r=e?e.app:null;return r&&r.getPath("home")||""},n.getTempPath=function(t){const e=t.getGame().getRenderer().getElectronRemote(),r=e?e.app:null;return r&&r.getPath("temp")||""},n.getPathDelimiter=function(){const t=s.fileSystem._getPath();return t&&t.sep||"/"},n.makeDirectory=function(t,e){const r=s.fileSystem._getFs();let o="error";if(r)try{r.mkdirSync(t),o="ok"}catch(i){g.error("Unable to create directory at: '"+t+"': ",i)}e.setString(o)},n.saveStringToFileAsync=function(t,e,r){const o=s.fileSystem._getFs();o&&o.writeFile(e,t,"utf8",i=>{r.setString("ok"),i&&(g.error("Unable to save the text to path: '"+e+"': ",i),r.setString("error"))})},n.saveStringToFile=function(t,e,r){const o=s.fileSystem._getFs();let i="error";if(o)try{o.writeFileSync(e,t,"utf8"),i="ok"}catch(c){g.error("Unable to save the text to path: '"+e+"': ",c)}r.setString(i)},n.saveVariableToJSONFile=function(t,e,r){const o=s.fileSystem._getFs();let i="error";if(o)try{o.writeFileSync(e,JSON.stringify(t.toJSObject()),"utf8"),i="ok"}catch(c){g.error("Unable to save the variable to path: '"+e+"': ",c)}r.setString(i)},n.saveVariableToJSONFileAsync=function(t,e,r){const o=s.fileSystem._getFs();o&&o.writeFile(e,JSON.stringify(t.toJSObject()),"utf8",i=>{r.setString("ok"),i&&(g.error("Unable to save the variable to path: '"+e+"': ",i),r.setString("error"))})},n.loadStringFromFile=function(t,e,r,o){const i=s.fileSystem._getFs();let c="error";if(i)try{const a=i.readFileSync(e,"utf8");a&&(t.setString(o?a.replace(/\r/g,""):a),c="ok")}catch(a){g.error("Unable to load the file at path: '"+e+"': ",a)}r.setString(c)},n.loadVariableFromJSONFile=function(t,e,r,o){const i=s.fileSystem._getFs();let c="error";if(i)try{const a=i.readFileSync(e,"utf8");a&&(t.fromJSON(o?a.replace(/\r/g,""):a),c="ok")}catch(a){g.error("Unable to load variable from the file at path: '"+e+"': ",a)}r.setString(c)},n.loadVariableFromJSONFileAsync=function(t,e,r,o){const i=s.fileSystem._getFs();i&&i.readFile(e,"utf8",(c,a)=>{a&&(t.fromJSON(o?a.replace(/\r/g,""):a),r.setString("ok")),c&&(g.error("Unable to load variable from the file at path: '"+e+"': ",c),r.setString("error"))})},n.loadStringFromFileAsync=function(t,e,r,o){const i=s.fileSystem._getFs();i&&i.readFile(e,"utf8",(c,a)=>{a&&(t.setString(o?a.replace(/\r/g,""):a),r.setString("ok")),c&&(g.error("Unable to load the file at path: '"+e+"': ",c),r.setString("error"))})},n.deleteFile=function(t,e){const r=s.fileSystem._getFs();let o="error";if(r)try{r.unlinkSync(t),o="ok"}catch(i){g.error("Unable to delete the file: '"+t+"': ",i),o="error"}e.setString(o)},n.deleteFileAsync=function(t,e){const r=s.fileSystem._getFs();r&&r.unlink(t,o=>{e.setString("ok"),o&&(g.error("Unable to delete the file: '"+t+"': ",o),e.setString("error"))})},n.pathExists=function(t){const e=s.fileSystem._getFs();return e?e.existsSync(t):!1}})(p=s.fileSystem||(s.fileSystem={}))})(gdjs||(gdjs={}));
//# sourceMappingURL=filesystemtools.js.map
