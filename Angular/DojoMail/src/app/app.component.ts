import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dojo Mail';
  CheckLater : Boolean = false;
  user = {
    first_name:"Nina",
    last_name:"Palumbo",
    email:"ninapalumbo@gmail.com",
  }
  emails = [

		{ Sender: 'ethanheavyrain123@gmail.com',
    Importance: true,
    Subject: "Json?!",
    Content: "JSONJSONJSONJSONJSONJSONJSONJSONJSONJSONJSONJSONJSONJSON"
    },
    { Sender: 'rocketman@gmail.com',
     Importance: false,
     Subject: "Check This Out!",
    Content: "Here's a Cool Thing."
    },
    {Sender: 'darthvader@gmail.com',
    Importance: false,
    Subject: "*Heavy Breathing*",
    Content: "Hey, youre pretty rad. I enjoy 'Planetary Destruction','Smooth Jazz','Father/Son Bonding', and 'long walks on the beach'. Hit me up girl."
    },
    {Sender: 'sylviaPlath@gmail.com',
    Importance: true,
    Subject: "Ted's Being Difficult Again",
    Content: "* insert Long winded poem*"
    },
    {Sender: 'michaelchoi@codingdojo.com',
    Importance: true,
    Subject: "Nina, Wow, Yay",
    Content: "You're doing so good! Keep it up!"
    }
]
today = new Date();
}
