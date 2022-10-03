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

const theJoke = jokes[Math.floor(Math.random()*jokes.length)];
console.log(theJoke);
console.log(Math.floor(Math.random()*jokes.length));

const jokeDiv = document.getElementById('joke');
console.log(jokeDiv.matches('.tellme'));
jokeDiv.innerHTML = theJoke;


another = ()=> {
    window.location.reload()
}
