const express = require('express');

const app = express();

const user = [{
  fname: 'ajay',
  kidneys: [{
    healthy: false 
  }]
}];
app.use(express.json());
app.get("/", function(req, res) {
  const joinkidneys = user[0].kidneys;
  const numberofkidneys = joinkidneys.length;
  let numberofHealthyKidneys = 0;

  for(let i = 0; i < joinkidneys.length; i++) {
    if(joinkidneys[i].healthy) {
      numberofHealthyKidneys += 1;
    }
  }
  
  // Correct this variable (rename it)
  const numberofUnhealthyKidneys = numberofkidneys - numberofHealthyKidneys;

  // Corrected res.json syntax
  res.json({
    numberofkidneys,
    numberofHealthyKidneys,
    numberofUnhealthyKidneys
  });
});

// post :  in the post we send the data in the body 

app.post("/", function(req, res){
  const ishealthy = req.body.ishealthy;
  user[0].kidneys.push({
    healthy: ishealthy
  })
  res.json(
    {
       mas:"msg done..!!"
    }
  )
  
})
app.put("/" , function(req, res){
  for(let i=0; i<user[0].kidneys.length; i++)
  {
    user[0].kidneys[i].healthy = true;
  }
  res.json({
    mag: "no unhealthy kidney"

  });
});


// removing all the unhealthy kidneys 
app.delete("/", function(req, res) {
  const newkidneys = [];
  
  // Loop through kidneys and filter only the healthy ones
  for (let i = 0; i < user[0].kidneys.length; i++) {
    if (user[0].kidneys[i].healthy) {
      newkidneys.push({ healthy: true });
    }
  }

  // Assign the filtered healthy kidneys back to the user object
  user[0].kidneys = newkidneys;

  // Send a response indicating success
  res.json({
    msg: "Deleted unhealthy kidneys",  
  });
});



app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});







