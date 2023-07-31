let age = prompt('How old are you?');

function checkAge(age) {
  age = parseInt(age);

  if (age >= 18) {
    return Promise.resolve(true);
  } else {
    return new Promise((resolve) => {
      swal({
        title: 'Do you have permission from your parents?',
        buttons: ['Yes', 'No'],
        icon: 'warning',
        dangerMode: true,
      }).then((result) => {
        if (result) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}

checkAge(age).then((result) => {
  if (result === true) {
    swal({
      title: 'Access Granted',
      text: 'You can stay on this page!',
      icon: 'success',
    });
  } else {
    swal({
      title: 'Access DENIED!!',
      text: 'You must exit from this page!',
      icon: 'error',
    });
  }
});





