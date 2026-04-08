s=(e,a=false)=>document[a?'querySelectorAll':'querySelector'](e);
aj=(l,d,f)=>{fetch(l,{method:'POST',body:d}).then(r=>r.json()).then(f);};
