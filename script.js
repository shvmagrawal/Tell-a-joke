const jokes = [
'Why did the scarecrow win an award? Because he was outstanding in his field.',
'Why did the melon jump into the lake? It wanted to be a water-melon.',
'What did the duck say when it bought lipstick? “Put it on my bill.”',
'What do you call a pig that does karate? A pork chop.',
"What has a bed that you can’t sleep in? A river.",
"Why were the teacher’s eyes crossed? She couldn’t control her pupils.",
'What starts with E, ends with E, and has only 1 letter in it? An Envelope.',
'How does the ocean say hello? It waves.',
'What lights up a soccer stadium? A soccer match.',
'What creature is smarter than a talking parrot? A spelling bee.',
'Which U.S. state has the smallest soft drinks? Minnesota (as in, “mini-soda”).',
'Why couldn’t the leopard play hide and seek? Because he was always spotted.',
'Apparently, you can’t use “beef stew” as a password. It’s not stroganoff.',
'Why did the drum take a nap? It was beat.',
'Where do hamburgers go dancing?  They go to the meat-ball.',
'Why did the tomato turn red?  It saw the salad dressing.',
"Why shouldn’t you write with a broken pencil? Because it’s pointless.",
'What do you call two monkeys that share an Amazon account? Prime mates.',
"Why are teddy bears never hungry? Because they’re always stuffed!",
'Why did the tree go to the dentist? It needed a root canal.',
"If athletes get athlete’s foot, what do elves get? Mistle-toes.",
"Why couldn’t the pony sing? Because she was a little hoarse.",
'Where do cows go for entertainment? The mooooo-vies!',
'What do you call a pig that does karate? A pork chop.',
'How does NASA organize a party? They planet.',
'Why did Adele cross the road?  To sing, “Hello from the other side!',
'What runs around a yard without actually moving? A fence.',
'What’s an astronaut’s favorite candy? A Mars bar.',
'Where do sheep go to get their hair cut?  The baa-baa shop.',
'Why are there gates around cemeteries? Because people are dying to get in.',
'What do you get when you cross a snake with a pie? A pie-thon!',
'Why is Peter Pan always flying? He neverlands.',
'What’s the most musical part of the chicken? The drumstick.',
'Why do seagulls fly over the sea? Because if they flew over a bay, they would be bagels.',
'How do you know when the moon has had enough to eat? When it’s full.',
'What kind of music do planets like? Neptunes.',
'Why can’t you trust an atom? Because they make up everything.',
'What do you call a group of disorganized cats? A cat-tastrophe.',
'Why do bees have sticky hair? Because they use honeycombs.',
'Where do you learn to make banana splits? At sundae school.',
'How do you tell if a vampire is sick? By how much he is coffin.',
'Why are ghosts good cheerleaders?  Because they have a lot of spirit!',
'What happens to a frog’s car when it breaks down? It gets toad away.',
'Why did the witches’ team lose the baseball game?  Their bats flew away.',
'Why did the school kids eat their homework? Because their teacher told them it was a piece of cake.',
'Why are hairdressers never late for work?  Because they know all the short cuts!',
'What is the difference between a teacher and a train? One says, “Spit out your gum,” and the other says, “Choo choo choo!”',
'Why does Humpty Dumpty love autumn?  Because Humpty Dumpty had a great fall.',
'How do you make a tissue dance? Put a little boogie in it.',
'What is the tallest building in the entire world?  The library, because it has so many stories.'
]

let adultJokes = [
    'Why was the guitar teacher arrested? For fingering a minor.',
    'Girl: “Hey, what’s up?” Boy: “If I tell you, will you sit on it?”',
    'What did the leper say to the prostitute? Keep the tip.',
    'What’s worse than waking up at a party and finding a penis drawn on your face? Finding out it was traced.',
    'You know you’ve got a high sperm count when she has to chew before she swallows.',
    'What’s warm, wet, and pink? A pig in a hot tub.',
    'How do you tell the difference between an oral and a rectal thermometer? By the taste.',
    'What’s 6 inches long, 2 inches wide, and drives women wild? A $100 bill.',
    'What’s the difference between the G-spot and a golf ball? A guy will search for a golf ball.',
    'What’s the difference between a woman and a computer? Computers don’t laugh at 3.5″ floppies.',
    'What’s the difference between your wife and your job? After five years your job will still suck.',
    'My midget friend got thrown out of the nudist colony because he kept getting in everyone’s hair.',
    'Life without women would be a pain in the butt, literally.',
    'What do boobs and toys have in common? They were both originally made for kids, but daddies end up playing with them.',
    'Why having fun with a prostitute is like a bungee jumping? You’re dead if the rubber breaks.',
    'Why does Santa Claus have such a big sack? He only comes once a year.',
    'What’s red and moves up and down? A tomato in an elevator.',
    'What do you get when you cross the Atlantic Ocean with the Titanic? Halfway.',
    'How did the mathematician deal with his constipation? He worked it out with a pencil.',
    'If a man talks dirty to a woman, that’s sexual harassment. If a woman talks dirty to a man, that’ll be $6.50 a minute.',
    'Men are like public toilets – the good ones are taken and the rest are full of crap.',
    'I love every bone in your body, especially mine.',
    'What do you call ball’s on your chin?  A dick in your mouth!',
    'What do a penis and a Rubik’s Cubes have in common? The more you play with it, the harder it gets.',
    'What did the hurricane say to the coconut tree? Hold onto your nuts, this ain’t no ordinary blowjob.',
    'As a scarecrow, people say I’m outstanding in my field. But hay, it’s in my jeans.',
   ' Why do women have orgasms? Just another reason to moan, really.',
    'Owls always look like they just saw a penis for the first time.',
   ' My gay friend got fired from the sperm bank because they caught him drinking on the job.',
   ' What’s a adult actress’ favorite drink?  7 Up in cider.',
    'What do you get when you mix birth control and LSD? A trip without kids.',
'    What’s the difference between a hooker and a drug dealer? A hooker can wash her crack and resell it.',
   '  What do you call a deaf gynecologist? A lip reader.',
     'The speed limit of sex is 68, because at 69 you have to turn around.',
     'How is life like a penis? Your girlfriend makes it hard.',
   '  What did the O say to the Q? Dude, your dick’s hanging out.',
     'Why was the guitar teacher arrested? For fingering a minor.',
     'What do you call a nun in a wheelchair? Virgin Mobile',
    ' Sex without condoms is magical… A baby appears and father disappears.',
     'Why do vegans give better head? They’re used to eating nuts.',
     'How is sex like a game of bridge? If you have a great hand, you don’t need a partner',
     'What do you call a herd of cows masturbating? Beef strokin’ off.',
     'What do you call a virgin lying on a waterbed? A cherry float.',
    ' What’s a foot long and slippery? A slipper.'
    ]

    
const jokeDiv = document.getElementById('joke');
let theJoke = jokes[Math.floor(Math.random()*jokes.length)];
console.log(theJoke);
let theAdultJoke = adultJokes[Math.floor(Math.random()*adultJokes.length)];
console.log(theAdultJoke);
jokeDiv.innerHTML = theJoke; 

let toggleButton = document.getElementById('toggle-button');
toggleJokes = ()=> {
    toggleButton.classList.toggle('on');
    whichJoke();
}

whichJoke = ()=> {
    // jokeDiv.innerHTML = theJoke;
    if(toggleButton.matches('.on') == false) {
        jokeDiv.innerHTML = theAdultJoke;
    }
    if(toggleButton.matches('.on') == true) {
        jokeDiv.innerHTML = theJoke; 
    }
}

another = ()=> {
     window.location.reload()
}
