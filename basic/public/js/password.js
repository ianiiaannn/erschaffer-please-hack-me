/* eslint-disable max-len */
window.addEventListener('load', () => {
  const form = document.getElementById('form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    input = atob(document.getElementById('password').value);
    let pass = false;
    if (input[21] + input[22] + input[23] == 'e6b') {
      if (input[9] + input[10] + input[11] == '863') {
        if (input[3] + input[4] + input[5] == 'CTF') {
          if (input[42] + input[43] + input[44] == '960') {
            if (input[24] + input[25] + input[26] == '2e5') {
              if (input[45] + input[46] +input[47] == '2a}') {
                if (input[0] + input[1] + input[2] == 'ele') {
                  if (input[15] + input[16] + input[17] == '3f7') {
                    if (input[6] + input[7] + input[8] == '{d1') {
                      if (input[27] + input[28] + input[29] == '85a') {
                        if (input[30] + input[31] + input[32] == '8b4') {
                          if (input[39] + input[40] + input[41] == 'd11') {
                            if (input[12] + input[13] + input[14] == '1a0') {
                              if (input[18] + input[19] + input[20] == '28f') {
                                if (input[36] + input[37] + input[38] == 'f54') {
                                  if (input[33] + input[34] + input[35] == '911') {
                                    pass = true;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    if (pass) alert(input);
    else alert('Wrong password.');
  });
});

