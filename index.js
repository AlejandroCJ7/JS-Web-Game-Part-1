

function newImage(src, left, bottom) {
    let imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.style.position = 'fixed';
    imgElement.style.left = left;
    imgElement.style.bottom = bottom;
    document.body.append(imgElement);
return (src, left , bottom)
}

newImage('assets/green-character.gif', '100px', '100px');
  newImage('assets/pine-tree.png', '450px', '200px'); 
  newImage('assets/tree.png', '200px', '300px');
  newImage('assets/pillar.png', '350px', '100px');
  newImage('assets/crate.png', '150px', '200px');
  newImage('assets/well.png', '500px', '425px');

  function newItem(src, left, bottom) {
  let sword = newItem(src, left, bottom);
  }
  
  sword.addEventListener('click', function() {
    sword.remove()
})

  newItem('assets/sword.png', '500px', '405px');
  newItem('assets/sheild.png', '165px', '185px');
  newItem('assets/staff.png', '600px', '100px');
   
  /* --this is my attempt at not trying to use document.createElement twice but i couldnt figure it out and tried looking up videos but nothing worked----
  
  function newItem(src, left, bottom) {
let sword = newItem(src, left, bottom)
 
sword.addEventListener('click', function() {
      sword.remove()
  })
} */

