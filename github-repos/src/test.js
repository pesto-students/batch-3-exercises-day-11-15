const axios = require('axios');
var repos = [];
axios.get(`https://api.github.com/users/ankajgoyal/repos`)
                  .then(res => {
                        for( i of res){
                            repos.push(i)
                        }
                            console.log(repos);
                            });
          
