const dropboxV2Api = require('dropbox-v2-api');
const fs = require('fs')

const dropbox = dropboxV2Api.authenticate({
   // Your token here
   token: 'sl.BfLx3YPrkFqKawBqXFUywpdvXVqSqwUidNpNUn2vQK3MchveOisTLJaBrDtK55-_OrN0prbTPGeqT_7YMcxd6ZRYVr-DnIWEonuw8SCchw93iOLTmGZrlx3XELOuBhHZ16ysRzN5HOxZ'
});

export const UploadFile = (file_dir: string, file_name: string, dbx_dir: string): Promise<boolean> => {
   return new Promise<boolean>((resolve, reject) => {
      dropbox({
         resource: 'files/upload',
         parameters: {
            path: dbx_dir + file_name
         },
         readStream: fs.createReadStream(file_dir + file_name)
      }, (err, result, response) => {
         if (err) {
            console.log(err);
            reject(false);
         }
         resolve(true);
      });
   })
}

export const FileMetadata = (dbx_dir: string, file_name: string): Promise<boolean> => {
   return new Promise<boolean>((resolve, reject) => {
      dropbox({
         resource: 'files/get_metadata',
         parameters: {
            path: dbx_dir + file_name,
            include_media_info: false
         }
      }, (err, result, response) => {
         if (err) {
            console.log(err);
            reject(false);
         }
         console.log(result);
         resolve(true)
      });
   })
}

export const DeleteFile = (dbx_dir: string, file_name: string): Promise<boolean> => {
   return new Promise<boolean>((resolve, reject) => {
      dropbox({
         resource: 'files/delete',
         parameters: {
            path: dbx_dir + file_name
         }
      }, (err, response) => {
         if (err) {
            console.log(err);
            reject(false);
         }
         resolve(true);
      })
   })
}