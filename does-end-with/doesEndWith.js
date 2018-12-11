
function doesEndWith(a,b) {
  if(b.includes(a) && a[a.length-1] === b[b.length-1]){
    return true;
  }
  else{
    return false;
  }
}

export {
  doesEndWith,
};
