function checkinfo()
{
  var fName = document.getElementById('firstnamebox').value;
  var lName = document.getElementById('lastnamebox').value;
  var address = document.getElementById('email').value;
  var confirmAddress = document.getElementById('confirmemail').value;

  if(fName != '' && lName != '' && address != '' && confirmAddress != '')
  {
    if(address != confirmAddress)
    {
      alert('Your e-mail address was not the same in both boxes.  For God to send His essence, He demands consistency.');
    }
    else{
      var regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      if(regex.test(address))
      {
        alert('Thank you.  Unimaginable joy awaits you.');
      }
      else {
        alert('If we sent God\'s essence to someone with that e-mail address, our bottled perfection would be wasted.');
      }
    }
  }
  else {
    alert('For our complete, holistic experience with God\'s liquid power, we need a complete, holistic filling of the blanks.');
  }
  return;
}
