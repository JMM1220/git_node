const ROOTURL = 'http://127.0.0.1:3000';
function uploadFile(e) {
  let fileDom = document.querySelector('#upload');
  let files = fileDom.files[0];
  let formData = new FormData();
  formData.append('file', files);

  $.ajax({
    url: ROOTURL + '/uploadfile',
    type: 'POST',
    contentType: false,
    data:formData,
    processData:false,
    success(res) {
      console.log(res);
    },
    error(err) {
      console.log(err);
    },
  });
}
