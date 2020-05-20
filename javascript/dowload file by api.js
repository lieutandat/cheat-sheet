        import { saveAs } from 'file-saver';
        
        const data = response.data
        let newContent = "";                                //solution code
        for (var i = 0; i < data.length; i++) {         //solution code
            newContent += String.fromCharCode(data.charCodeAt(i) & 0xFF); //solution code
        } 
        var bytes = new Uint8Array(newContent.length);                     //modified
        for (var i=0; i<newContent.length; i++) {                          //modified
            bytes[i] = newContent.charCodeAt(i);                           //modified
        }
        let blob = new Blob([bytes], {type: "application/zip"})

        const url = window.URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', fileName)
        document.body.appendChild(link)
        link.click()
        
        // saveAs(blob, fileName)
