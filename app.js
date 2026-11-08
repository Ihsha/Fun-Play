/**
 * Fun Play - World-Class Gaming Portal (657+ Games Catalog)
 * Integrated Ad Blocker & 100% Ad-Free Modes
 * Developed by MR Developers
 */

// Global Image Error Handler (Backup)
window.handleImgError = function(imgEl, title, category) {
  imgEl.onerror = null;
  imgEl.src = "ats/fun play logo.png";
};

// Safely escape a value so it can be embedded inside a single-quoted JS
// string literal that itself lives inside an HTML attribute, e.g.
// onclick="openGameModal('${escapeJsAttr(id)}')". Prevents titles/ids
// containing a backslash or apostrophe from breaking the generated markup.
function escapeJsAttr(str) {
  return String(str == null ? '' : str).replace(/\\/g, '\\\\').replace(/'/g, "\\'");
}

// Master 657+ Games Database
const GAMES_DATABASE = [
 {
    "id": "gta-vice-city",
    "title": "GTA: Vice City",
    "category": "action",
    "badge": "🔥 FEATURED",
    "rating": 4.9,
    "plays": "1.2M",
    "desc": "The full open-world classic running in your browser. Neon-soaked Miami, Tommy Vercetti, and total chaos — no download required.",
    "thumb": "ats/gtavc.webp",
    "url": "https://vcweb.studynotes.top/",
    "type": "external",
    "trendingThumb": "https://media1.tenor.com/m/T45snMeFSRgAAAAd/gta-vice-city-vice-city.gif", 
    "adfree": true,
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "Minecraft",
    "title": "Minecraft",
    "category": "creative",
    "badge": "🔥 FEATURED",
    "rating": 4.5,
    "plays": "4.7M",
    "desc": "Explore new gaming adventures, accessories, & merchandise.",
    "thumb": "ats/Minecraft.webp",
    "url": "https://eaglercraftx.pages.dev",
    "type": "external",
    "trendingThumb": "https://media.tenor.com/LeEQc5eToRMAAAAe/minecraft-cinematic.png",
    "adfree": false,
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "venge",
    "title": "venge",
    "category": "action",
    "badge": "OPEN FIRE",
    "rating": 4.2,
    "plays": "2.3M",
    "desc": "Venge is an online shooter where you will be playing against real players from all around the world in an arena. There are several weapons to choose from ...",
    "thumb": "https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=1200,height=1200,fit=cover,f=png/a2ddd7d16a599f8f01b65a3bc453e698/venge-io-logo.png",
    "url": "https://venge.io/",
    "type": "external",
    "adfree": false,
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
   {
    "id": "IGI",
    "title": "IGI",
    "category": "action",
    "badge": "OPEN FIRE",
    "rating": 4.2,
    "plays": "2.3M",      
    "desc": "Project I.G.I.: I'm Going In",
    "thumb": "https://m.media-amazon.com/images/M/MV5BYzBjNWQyM2YtZWVmNS00YzMxLTk4MTQtN2QzODQ2YjI0MDQ3XkEyXkFqcGc@._V1_.jpg",
    "url": "https://playigi.com/play.html",
    "type": "external",
    "adfree": true,
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "Traffic Rider",
    "title": "Traffic Rider",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "2.3M",
    "desc": "Ride your bike in the endless highway roads overtaking the traffic, upgrade and buy new bikes to beat the missions in career mode.",
    "thumb": "https://imgs.crazygames.com/traffic-rider-vvq_16x9/20250526021507/traffic-rider-vvq_16x9-cover",
    "url": "https://traffic-rider.io/game/traffic-rider/",
    "type": "external",
    "adfree": true,
    "trendingVideo": "https://videos.crazygames.com/traffic-rider-vvq/15/traffic-rider-vvq-landscape-364x208_30fps.mp4",
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "hill climb race",
    "title": "hill climb race",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "2.3M",
    "desc": "Ride your bike in the endless highway roads overtaking the traffic, upgrade and buy new bikes to beat the missions in career mode.",
    "thumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg0h545ZHAKVYvrTNANFL5w0euXdNyIP1FVx6Nkk03vw&s",
    "url": "https://azgames.io/game/hill-climb-race/",
    "type": "external",
    "adfree": true,
    "trendingThumb": "https://media1.tenor.com/m/IY7jGaJ6XGYAAAAd/hill-climb-racing.gif",
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "worms zone",
    "title": "worms zone",
    "category": "arcade",
    "badge": "arcade",
    "rating": 4.5,
    "plays": "2.3M",
    "desc": "The kill'em all game. Play with millions of players around the world and try to become the longest of the day!",
    "thumb": "https://cdn.aptoide.com/imgs/2/8/d/28db27e2a5d1adcf64880c2153cd07dc_fgraphic.png",
    "url": "https://worms.zone/game/web/",
    "type": "external",
    "adfree": true,
    "trendingVideo": "ats/ws.mp4",
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "DEADSHOT",
    "title": "DEADSHOT",
    "category": "action",
    "badge": "OPEN FIRE",
    "rating": 4.2,
    "plays": "2.3M",
    "desc": "Multiplayer online first-person shooter that's easily accessible. Grab your friends, join a lobby, and eliminate your opponents!",
    "thumb": "https://deadshot.io/promo/thumbnail.png",
    "url": "https://deadshot.io/",
    "type": "external",
    "adfree": false,
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "krunker",
    "title": "krunker",
    "category": "action",
    "badge": "OPEN FIRE",
    "rating": 4.2,
    "plays": "2.3M",
    "desc": "The ultimate free browser FPS game! Join millions of players in fast-paced multiplayer battles. No download required, works on any device.",
    "thumb": "https://static.tvtropes.org/pmwiki/pub/images/krunker_io_other_4.png",
    "url": "https://krunker.io/",
    "type": "external",
    "adfree": false,
    "trendingThumb": "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/22470549/krunkerxbox.gif",
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "smashkarts",
    "title": "smashkarts",
    "category": "racing",
    "badge": "Battle",
    "rating": 4.2,
    "plays": "2.3M",
    "desc": "Smash Karts is a free io Multiplayer Kart Battle Arena game. Drive fast. Fire rockets. Make big explosions.",
    "thumb": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmtQg_bIPu4MlIwstxRX0OYQKZLtGOI9jynTRWXEtLaiI4-83OLtR_Qgha&s=10",
    "url": "https://smashkarts.io/",
    "type": "external",
    "adfree": false,
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "shellshock",
    "title": "shellshock",
    "category": "action",
    "badge": "OPEN FIRE",
    "rating": 4.2,
    "plays": "2.3M",
    "desc": "Shell Shockers is unique online shooter in first-person perspective where all the characters are represented exclusively by eggs.",
    "thumb": "https://www.shellshock.io/img/previewImage_shellShockers.webp",
    "url": "https://shellshock.io/",
    "type": "external",
    "adfree": false,
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "evowars",
    "title": "evowars",
    "category": "action",
    "badge": "Battle",
    "rating": 4.2,
    "plays": "2.3M",
    "desc": "The best IO fighting game ever! Challenge mighty opponents in an open arena and become a legend!",
    "thumb": "https://imgs.crazygames.com/evowarsio_16x9/20251003061326/evowarsio_16x9-cover?metadata=none&quality=60&height=6171",
    "url": "https://evowars.io/",
    "type": "external",
    "adfree": false,
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "slowroads",
    "title": "slowroads",
    "category": "racing",
    "badge": "Drive",
    "rating": 4.2,
    "plays": "2.3M",
    "desc": "Slow Roads is a casual driving game designed for long, cathartic journeys on quiet, scenic roads. Simply chase the horizon through endless, procedurally...",
    "thumb": "https://img.itch.zone/aW1nLzI1NzAwNDUwLmpwZw==/315x250%23c/rsuzEA.jpg",
    "url": "https://slowroads.io/",
    "type": "external",
    "adfree": false,
    "featured": true,
    "controls": "WASD/Arrow keys to move, Mouse to aim & look, Space to jump, Shift to run. On-screen touch controls on mobile, full gamepad support on desktop."
  },
  {
    "id": "snake",
    "title": "SNAKE",
    "category": "arcade",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.8,
    "plays": "142K",
    "desc": "Eat, grow, don't bite yourself. The original one-button panic.",
    "thumb": "ats/snake.webp",
    "url": "gms/snake.html",
    "type": "local",
    "adfree": true,
    "controls": "Arrow Keys / Swipe to control snake direction."
  },
  {
    "id": "2048",
    "title": "2048",
    "category": "puzzle",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.9,
    "plays": "210K",
    "desc": "Slide tiles, merge numbers, chase the elusive 2048 tile.",
    "thumb": "ats/2048.webp",
    "url": "gms/2048.html",
    "type": "local",
    "adfree": true,
    "controls": "Arrow keys / Swipe to slide numbers."
  },
  {
    "id": "memory",
    "title": "MEMORY MATCH",
    "category": "puzzle",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.7,
    "plays": "98K",
    "desc": "Flip two cards at a time. Clear the board in the fewest moves.",
    "thumb": "ats/MEMORY MATCH.webp",
    "url": "gms/memory.html",
    "type": "local",
    "adfree": true,
    "controls": "Click or tap cards to flip."
  },
  {
    "id": "pacman",
    "title": "Pacman",
    "category": "arcade",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.9,
    "plays": "320K",
    "desc": "Classic dot eating maze runner. Outsmart the ghosts!",
    "thumb": "ats/pacman.webp",
    "url": "gms/pacman.html",
    "type": "local",
    "adfree": true,
    "controls": "Arrow keys / On-screen D-Pad to move."
  },
  {
    "id": "tetris",
    "title": "Tetris",
    "category": "arcade",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.9,
    "plays": "410K",
    "desc": "Fit falling blocks to clear lines and score points.",
    "thumb": "ats/tetris.webp",
    "url": "gms/tetris.html",
    "type": "local",
    "adfree": true,
    "controls": "Left/Right to move, Up to rotate, Down to drop."
  },
  {
    "id": "flappy",
    "title": "FLAPPY",
    "category": "arcade",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.6,
    "plays": "280K",
    "desc": "Tap to flap, thread the pipes, beat your best run.",
    "thumb": "ats/FLAPPY.webp",
    "url": "gms/flappy.html",
    "type": "local",
    "adfree": true,
    "controls": "Spacebar / Click / Tap to flap."
  },
  {
    "id": "breakout",
    "title": "BREAKOUT",
    "category": "arcade",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.7,
    "plays": "115K",
    "desc": "Smash every brick before you run out of lives.",
    "thumb": "ats/BREAKOUT.webp",
    "url": "gms/breakout.html",
    "type": "local",
    "adfree": true,
    "controls": "Mouse / Arrow keys to move paddle."
  },
  {
    "id": "pong",
    "title": "PONG",
    "category": "arcade",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.5,
    "plays": "85K",
    "desc": "The original. First to five points wins the cabinet.",
    "thumb": "ats/pong.webp",
    "url": "gms/pong.html",
    "type": "local",
    "adfree": true,
    "controls": "Up/Down arrows or W/S keys to control paddle."
  },
  {
    "id": "tictactoe",
    "title": "TIC-TAC-TOE",
    "category": "puzzle",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.6,
    "plays": "92K",
    "desc": "Face off against an unbeatable cabinet AI. Best you can do is draw.",
    "thumb": "ats/TIC-TAC-TOE.webp",
    "url": "gms/tictactoe.html",
    "type": "local",
    "adfree": true,
    "controls": "Click any square to place X or O."
  },
  {
    "id": "mole",
    "title": "WHACK-A-MOLE",
    "category": "arcade",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.7,
    "plays": "104K",
    "desc": "Quick reflexes only \u2014 30 seconds to rack up your score.",
    "thumb": "ats/WHACK-A-MOLE.webp",
    "url": "gms/mole.html",
    "type": "local",
    "adfree": true,
    "controls": "Click or tap moles to whack."
  },
  {
    "id": "frogger",
    "title": "Frogger",
    "category": "arcade",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.7,
    "plays": "130K",
    "desc": "Cross roads and rivers safely to reach home.",
    "thumb": "ats/frogger.webp",
    "url": "gms/frogger.html",
    "type": "local",
    "adfree": true,
    "controls": "Arrow keys / Swipe to hop."
  },
  {
    "id": "shmup",
    "title": "Shmup",
    "category": "action",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.8,
    "plays": "175K",
    "desc": "Blast alien spaceships in vertical space combat.",
    "thumb": "ats/shmup.webp",
    "url": "gms/shmup.html",
    "type": "local",
    "adfree": true,
    "controls": "Arrow keys / Drag ship, Spacebar to shoot."
  },
  {
    "id": "minesweeper",
    "title": "MINESWEEPER",
    "category": "puzzle",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.8,
    "plays": "160K",
    "desc": "Flag the mines, clear the grid, don't trust your luck.",
    "thumb": "ats/MINESWEEPER.webp",
    "url": "gms/minesweeper/minesweeper.html",
    "type": "local",
    "adfree": true,
    "controls": "Left click to reveal, Right click to flag mine."
  },
  {
    "id": "tower",
    "title": "Build Tower",
    "category": "arcade",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.9,
    "plays": "240K",
    "desc": "Build the Tower as high as you can!",
    "thumb": "ats/build.webp",
    "url": "https://ihsha.github.io/Tower-Building-Game",
    "type": "external",
    "adfree": true,
    "controls": "Click / Tap screen to release building block."
  },
  {
    "id": "forestrunner",
    "title": "Forest runner",
    "category": "action",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.8,
    "plays": "190K",
    "desc": "Escape the lost woods!!",
    "thumb": "ats/forestrunner.webp",
    "url": "https://ihsha.github.io/Forest-runner",
    "type": "external",
    "adfree": true,
    "controls": "Arrow keys to move and jump."
  },
  {
    "id": "flightsim",
    "title": "Flight simulator",
    "category": "racing",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.9,
    "plays": "310K",
    "desc": "Drive fast as you can!!",
    "thumb": "ats/flightsmu.webp",
    "url": "https://ihsha.github.io/flight-simulator",
    "type": "external",
    "adfree": true,
    "controls": "W/A/S/D or Arrow keys to steer aircraft."
  },
  {
    "id": "mrfighter",
    "title": "MR.Fighter (Multiplayer)",
    "category": "action",
    "badge": "\u26a1 AD-FREE",
    "rating": 4.9,
    "plays": "275K",
    "desc": "Explore the fighting skills!",
    "thumb": "ats/fight.webp",
    "url": "https://ihsha.github.io/fighting-game",
    "type": "external",
    "adfree": true,
    "controls": "P1: A/D/W/S | P2: Arrow Keys."
  },
  {
    "id": "basketballsuperstars",
    "title": "Basketball Superstars",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Basketball Superstars online for free on Fun Play!",
    "thumb": "ats/thumbs/basketballsuperstars.jpg",
    "url": "https://play.famobi.com/basketball-superstars/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wordsolitaire",
    "title": "Word Solitaire",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Word Solitaire online for free on Fun Play!",
    "thumb": "ats/thumbs/wordsolitaire.jpg",
    "url": "https://play.famobi.com/word-solitaire/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cookingrage",
    "title": "Cooking Rage",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Cooking Rage online for free on Fun Play!",
    "thumb": "ats/thumbs/cookingrage.jpg",
    "url": "https://play.famobi.com/cooking-rage/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "templeblocks",
    "title": "Temple Blocks",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Temple Blocks online for free on Fun Play!",
    "thumb": "ats/thumbs/templeblocks.jpg",
    "url": "https://play.famobi.com/temple-blocks/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "funrace3d",
    "title": "Fun Race 3D",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Fun Race 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/funrace3d.jpg",
    "url": "https://play.famobi.com/fun-race-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cuttheropetimetravel",
    "title": "Cut The Rope Time Travel",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Cut The Rope Time Travel online for free on Fun Play!",
    "thumb": "ats/thumbs/cuttheropetimetravel.jpg",
    "url": "https://play.famobi.com/cut-the-rope-time-travel/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cuttherope2",
    "title": "Cut The Rope 2",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Cut The Rope 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/cuttherope2.jpg",
    "url": "https://play.famobi.com/cut-the-rope-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cuttheropeexperiment",
    "title": "Cut The Rope Experiment",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Cut The Rope Experiment online for free on Fun Play!",
    "thumb": "ats/thumbs/cuttheropeexperiment.jpg",
    "url": "https://play.famobi.com/cut-the-rope-experiment/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "glassbreak",
    "title": "Glass Break",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Glass Break online for free on Fun Play!",
    "thumb": "ats/thumbs/glassbreak.jpg",
    "url": "https://play.famobi.com/glass-break/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dyehard",
    "title": "Dye Hard",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Dye Hard online for free on Fun Play!",
    "thumb": "ats/thumbs/dyehard.jpg",
    "url": "https://play.famobi.com/dye-hard/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "starstarsarena",
    "title": "Star Stars Arena",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Star Stars Arena online for free on Fun Play!",
    "thumb": "ats/thumbs/starstarsarena.jpg",
    "url": "https://play.famobi.com/star-stars-arena/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jellyrun2048",
    "title": "Jelly Run 2048",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Jelly Run 2048 online for free on Fun Play!",
    "thumb": "ats/thumbs/jellyrun2048.jpg",
    "url": "https://play.famobi.com/jelly-run-2048/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "whodieslast",
    "title": "Who Dies Last",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Who Dies Last online for free on Fun Play!",
    "thumb": "ats/thumbs/whodieslast.jpg",
    "url": "https://play.famobi.com/who-dies-last/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cuttheropemagic",
    "title": "Cut The Rope Magic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Cut The Rope Magic online for free on Fun Play!",
    "thumb": "ats/thumbs/cuttheropemagic.jpg",
    "url": "https://play.famobi.com/cut-the-rope-magic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bouncemasters",
    "title": "Bouncemasters",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Bouncemasters online for free on Fun Play!",
    "thumb": "ats/thumbs/bouncemasters.jpg",
    "url": "https://play.famobi.com/bouncemasters/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "carsarena",
    "title": "Cars Arena",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Cars Arena online for free on Fun Play!",
    "thumb": "ats/thumbs/carsarena.jpg",
    "url": "https://play.famobi.com/cars-arena/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "stateconnect",
    "title": "State Connect",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play State Connect online for free on Fun Play!",
    "thumb": "ats/thumbs/stateconnect.jpg",
    "url": "https://play.famobi.com/state-connect/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "teethrunner",
    "title": "Teeth Runner",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Teeth Runner online for free on Fun Play!",
    "thumb": "ats/thumbs/teethrunner.jpg",
    "url": "https://play.famobi.com/teeth-runner/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "omnomtower3d",
    "title": "Om Nom Tower 3D",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Om Nom Tower 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/omnomtower3d.jpg",
    "url": "https://play.famobi.com/om-nom-tower-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "riseup",
    "title": "Rise Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Rise Up online for free on Fun Play!",
    "thumb": "ats/thumbs/riseup.jpg",
    "url": "https://play.famobi.com/rise-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "trainminer",
    "title": "Train Miner",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Train Miner online for free on Fun Play!",
    "thumb": "ats/thumbs/trainminer.jpg",
    "url": "https://play.famobi.com/train-miner/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "giantrush",
    "title": "Giant Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Giant Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/giantrush.jpg",
    "url": "https://play.famobi.com/giant-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "westernsniper",
    "title": "Western Sniper",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Western Sniper online for free on Fun Play!",
    "thumb": "ats/thumbs/westernsniper.jpg",
    "url": "https://play.famobi.com/western-sniper/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "goescape",
    "title": "Go Escape",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Go Escape online for free on Fun Play!",
    "thumb": "ats/thumbs/goescape.jpg",
    "url": "https://play.famobi.com/go-escape/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "colorfill3d",
    "title": "Color Fill 3D",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Color Fill 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/colorfill3d.jpg",
    "url": "https://play.famobi.com/color-fill-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "spotthecat",
    "title": "Spot the Cat",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Spot the Cat online for free on Fun Play!",
    "thumb": "ats/thumbs/spotthecat.jpg",
    "url": "https://play.famobi.com/spot-the-cat/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "colorroll3d",
    "title": "Color Roll 3D",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Color Roll 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/colorroll3d.jpg",
    "url": "https://play.famobi.com/color-roll-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "colorwatersort3d",
    "title": "Color Water Sort 3D",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Color Water Sort 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/colorwatersort3d.jpg",
    "url": "https://play.famobi.com/color-water-sort-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "braindom",
    "title": "Braindom",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Braindom online for free on Fun Play!",
    "thumb": "ats/thumbs/braindom.jpg",
    "url": "https://play.famobi.com/braindom/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sortit",
    "title": "Sort It",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Sort It online for free on Fun Play!",
    "thumb": "ats/thumbs/sortit.jpg",
    "url": "https://play.famobi.com/sort-it/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cubematch",
    "title": "Cube Match",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Cube Match online for free on Fun Play!",
    "thumb": "ats/thumbs/cubematch.jpg",
    "url": "https://play.famobi.com/cube-match/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "parkingjam",
    "title": "Parking Jam",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Parking Jam online for free on Fun Play!",
    "thumb": "ats/thumbs/parkingjam.jpg",
    "url": "https://play.famobi.com/parking-jam/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fashionbattle",
    "title": "Fashion Battle",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Fashion Battle online for free on Fun Play!",
    "thumb": "ats/thumbs/fashionbattle.jpg",
    "url": "https://play.famobi.com/fashion-battle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fruitparty",
    "title": "Fruit Party",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Fruit Party online for free on Fun Play!",
    "thumb": "ats/thumbs/fruitparty.jpg",
    "url": "https://play.famobi.com/fruit-party/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "thiefpuzzle",
    "title": "Thief Puzzle",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Thief Puzzle online for free on Fun Play!",
    "thumb": "ats/thumbs/thiefpuzzle.jpg",
    "url": "https://play.famobi.com/thief-puzzle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "guesstheiranswer",
    "title": "Guess Their Answer",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Guess Their Answer online for free on Fun Play!",
    "thumb": "ats/thumbs/guesstheiranswer.jpg",
    "url": "https://play.famobi.com/guess-their-answer/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "neonrider",
    "title": "Neon Rider",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Neon Rider online for free on Fun Play!",
    "thumb": "ats/thumbs/neonrider.jpg",
    "url": "https://play.famobi.com/neon-rider/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "speedmaster",
    "title": "Speed Master",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Speed Master online for free on Fun Play!",
    "thumb": "ats/thumbs/speedmaster.jpg",
    "url": "https://play.famobi.com/speed-master/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "alienattack",
    "title": "Alien Attack",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Alien Attack online for free on Fun Play!",
    "thumb": "ats/thumbs/alienattack.jpg",
    "url": "https://play.famobi.com/alien-attack/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "peetsneak",
    "title": "Peet Sneak",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Peet Sneak online for free on Fun Play!",
    "thumb": "ats/thumbs/peetsneak.jpg",
    "url": "https://play.famobi.com/peet-sneak/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cuttherope",
    "title": "Cut The Rope",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Cut The Rope online for free on Fun Play!",
    "thumb": "ats/thumbs/cuttherope.jpg",
    "url": "https://play.famobi.com/cut-the-rope/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "toiletrun",
    "title": "Toilet Run",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Toilet Run online for free on Fun Play!",
    "thumb": "ats/thumbs/toiletrun.jpg",
    "url": "https://play.famobi.com/toilet-run/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "blockpainter",
    "title": "Block Painter",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Block Painter online for free on Fun Play!",
    "thumb": "ats/thumbs/blockpainter.jpg",
    "url": "https://play.famobi.com/block-painter/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pairup3d",
    "title": "Pair Up 3D",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Pair Up 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/pairup3d.jpg",
    "url": "https://play.famobi.com/pair-up-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cowboyswing",
    "title": "Cowboy Swing",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Cowboy Swing online for free on Fun Play!",
    "thumb": "ats/thumbs/cowboyswing.jpg",
    "url": "https://play.famobi.com/cowboy-swing/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "goaround",
    "title": "Go Around",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Go Around online for free on Fun Play!",
    "thumb": "ats/thumbs/goaround.jpg",
    "url": "https://play.famobi.com/go-around/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "greenball",
    "title": "Green Ball",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Green Ball online for free on Fun Play!",
    "thumb": "ats/thumbs/greenball.jpg",
    "url": "https://play.famobi.com/green-ball/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "twistylines",
    "title": "Twisty Lines",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Twisty Lines online for free on Fun Play!",
    "thumb": "ats/thumbs/twistylines.jpg",
    "url": "https://play.famobi.com/twisty-lines/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "lawnmower",
    "title": "Lawn Mower",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Lawn Mower online for free on Fun Play!",
    "thumb": "ats/thumbs/lawnmower.jpg",
    "url": "https://play.famobi.com/lawn-mower/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "risingsquares",
    "title": "Rising Squares",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Rising Squares online for free on Fun Play!",
    "thumb": "ats/thumbs/risingsquares.jpg",
    "url": "https://play.famobi.com/rising-squares/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "towerfall",
    "title": "Tower Fall",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Tower Fall online for free on Fun Play!",
    "thumb": "ats/thumbs/towerfall.jpg",
    "url": "https://play.famobi.com/tower-fall/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "emojifun",
    "title": "Emoji Fun",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Emoji Fun online for free on Fun Play!",
    "thumb": "ats/thumbs/emojifun.jpg",
    "url": "https://play.famobi.com/emoji-fun/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bottleflip",
    "title": "Bottle Flip",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Bottle Flip online for free on Fun Play!",
    "thumb": "ats/thumbs/bottleflip.jpg",
    "url": "https://play.famobi.com/bottle-flip/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "slimeroad",
    "title": "Slime Road",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Slime Road online for free on Fun Play!",
    "thumb": "ats/thumbs/slimeroad.jpg",
    "url": "https://play.famobi.com/slime-road/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pipepuzzle",
    "title": "Pipe Puzzle",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Pipe Puzzle online for free on Fun Play!",
    "thumb": "ats/thumbs/pipepuzzle.jpg",
    "url": "https://play.famobi.com/pipe-puzzle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "funnyfred",
    "title": "Funny Fred",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Funny Fred online for free on Fun Play!",
    "thumb": "ats/thumbs/funnyfred.jpg",
    "url": "https://play.famobi.com/funny-fred/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "barbaraampkent",
    "title": "Barbara &amp; Kent",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Barbara &amp; Kent online for free on Fun Play!",
    "thumb": "ats/thumbs/barbaraampkent.jpg",
    "url": "https://play.famobi.com/barbara-kent/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "parkingpanic",
    "title": "Parking Panic",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Parking Panic online for free on Fun Play!",
    "thumb": "ats/thumbs/parkingpanic.jpg",
    "url": "https://play.famobi.com/parking-panic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "superthrower",
    "title": "Super Thrower",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Super Thrower online for free on Fun Play!",
    "thumb": "ats/thumbs/superthrower.jpg",
    "url": "https://play.famobi.com/super-thrower/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "foodrush",
    "title": "Food Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Food Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/foodrush.jpg",
    "url": "https://play.famobi.com/food-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "parkingrush",
    "title": "Parking Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Parking Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/parkingrush.jpg",
    "url": "https://play.famobi.com/parking-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "gunspin",
    "title": "Gun Spin",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Gun Spin online for free on Fun Play!",
    "thumb": "ats/thumbs/gunspin.jpg",
    "url": "https://play.famobi.com/gun-spin/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "giantattack",
    "title": "Giant Attack",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Giant Attack online for free on Fun Play!",
    "thumb": "ats/thumbs/giantattack.jpg",
    "url": "https://play.famobi.com/giant-attack/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "goodshelves",
    "title": "Good Shelves",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Good Shelves online for free on Fun Play!",
    "thumb": "ats/thumbs/goodshelves.jpg",
    "url": "https://play.famobi.com/good-shelves/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "crazyhenlevel",
    "title": "Crazy Hen Level",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Crazy Hen Level online for free on Fun Play!",
    "thumb": "ats/thumbs/crazyhenlevel.jpg",
    "url": "https://play.famobi.com/crazy-hen-level/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dancebattle",
    "title": "Dance Battle",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Dance Battle online for free on Fun Play!",
    "thumb": "ats/thumbs/dancebattle.jpg",
    "url": "https://play.famobi.com/dance-battle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tilejourney",
    "title": "Tile Journey",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Tile Journey online for free on Fun Play!",
    "thumb": "ats/thumbs/tilejourney.jpg",
    "url": "https://play.famobi.com/tile-journey/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "lovetester",
    "title": "Love Tester",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Love Tester online for free on Fun Play!",
    "thumb": "ats/thumbs/lovetester.jpg",
    "url": "https://play.famobi.com/love-tester/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "emojimatch",
    "title": "Emoji Match",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Emoji Match online for free on Fun Play!",
    "thumb": "ats/thumbs/emojimatch.jpg",
    "url": "https://play.famobi.com/emoji-match/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "towersmash",
    "title": "Tower Smash",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Tower Smash online for free on Fun Play!",
    "thumb": "ats/thumbs/towersmash.jpg",
    "url": "https://play.famobi.com/tower-smash/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "towersmashlevel",
    "title": "Tower Smash Level",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Tower Smash Level online for free on Fun Play!",
    "thumb": "ats/thumbs/towersmashlevel.jpg",
    "url": "https://play.famobi.com/tower-smash-level/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "savetheprincess",
    "title": "Save the Princess",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Save the Princess online for free on Fun Play!",
    "thumb": "ats/thumbs/savetheprincess.jpg",
    "url": "https://play.famobi.com/save-the-princess/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "peetalock",
    "title": "Peet a Lock",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Peet a Lock online for free on Fun Play!",
    "thumb": "ats/thumbs/peetalock.jpg",
    "url": "https://play.famobi.com/peet-a-lock/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "penguslide",
    "title": "Pengu Slide",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Pengu Slide online for free on Fun Play!",
    "thumb": "ats/thumbs/penguslide.jpg",
    "url": "https://play.famobi.com/pengu-slide/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "peetaround",
    "title": "Peet Around",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Peet Around online for free on Fun Play!",
    "thumb": "ats/thumbs/peetaround.jpg",
    "url": "https://play.famobi.com/peet-around/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wordsofwonders",
    "title": "Words of Wonders",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Words of Wonders online for free on Fun Play!",
    "thumb": "ats/thumbs/wordsofwonders.jpg",
    "url": "https://play.famobi.com/words-of-wonders/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "emojiflow",
    "title": "Emoji Flow",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Emoji Flow online for free on Fun Play!",
    "thumb": "ats/thumbs/emojiflow.jpg",
    "url": "https://play.famobi.com/emoji-flow/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "neonswing",
    "title": "Neon Swing",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Neon Swing online for free on Fun Play!",
    "thumb": "ats/thumbs/neonswing.jpg",
    "url": "https://play.famobi.com/neon-swing/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "neontower",
    "title": "Neon Tower",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Neon Tower online for free on Fun Play!",
    "thumb": "ats/thumbs/neontower.jpg",
    "url": "https://play.famobi.com/neon-tower/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "driftdudes",
    "title": "Drift Dudes",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Drift Dudes online for free on Fun Play!",
    "thumb": "ats/thumbs/driftdudes.jpg",
    "url": "https://play.famobi.com/drift-dudes/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "slope",
    "title": "Slope",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "185K",
    "desc": "Play Slope online for free on Fun Play!",
    "thumb": "ats/thumbs/slope.jpg",
    "url": "https://play.famobi.com/slope/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cubito",
    "title": "Cubito",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Cubito online for free on Fun Play!",
    "thumb": "ats/thumbs/cubito.jpg",
    "url": "https://play.famobi.com/cubito/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "taptapdunk",
    "title": "Tap Tap Dunk",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Tap Tap Dunk online for free on Fun Play!",
    "thumb": "ats/thumbs/taptapdunk.jpg",
    "url": "https://play.famobi.com/tap-tap-dunk/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ramp",
    "title": "Ramp",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "168K",
    "desc": "Play Ramp online for free on Fun Play!",
    "thumb": "ats/thumbs/ramp.jpg",
    "url": "https://play.famobi.com/ramp/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "diamondrush2",
    "title": "Diamond Rush 2",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Diamond Rush 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/diamondrush2.jpg",
    "url": "https://play.famobi.com/diamond-rush-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "colortunnel",
    "title": "Color Tunnel",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Color Tunnel online for free on Fun Play!",
    "thumb": "ats/thumbs/colortunnel.jpg",
    "url": "https://play.famobi.com/color-tunnel/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "butterflyshimai",
    "title": "Butterfly Shimai",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Butterfly Shimai online for free on Fun Play!",
    "thumb": "ats/thumbs/butterflyshimai.jpg",
    "url": "https://play.famobi.com/butterfly-shimai/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "escooter",
    "title": "E-Scooter!",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play E-Scooter! online for free on Fun Play!",
    "thumb": "ats/thumbs/escooter.jpg",
    "url": "https://play.famobi.com/e-scooter/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "popitduel",
    "title": "Pop It! Duel",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Pop It! Duel online for free on Fun Play!",
    "thumb": "ats/thumbs/popitduel.jpg",
    "url": "https://play.famobi.com/pop-it-duel/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "stairrace3d",
    "title": "Stair Race 3D",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Stair Race 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/stairrace3d.jpg",
    "url": "https://play.famobi.com/stair-race-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "crowdrun3d",
    "title": "Crowd Run 3D",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Crowd Run 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/crowdrun3d.jpg",
    "url": "https://play.famobi.com/crowd-run-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "uncleahmed",
    "title": "Uncle Ahmed",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Uncle Ahmed online for free on Fun Play!",
    "thumb": "ats/thumbs/uncleahmed.jpg",
    "url": "https://play.famobi.com/uncle-ahmed/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dices20483d",
    "title": "Dices 2048 3D",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Dices 2048 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/dices20483d.jpg",
    "url": "https://play.famobi.com/dices-2048-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "frankensteingo",
    "title": "Frankenstein Go",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Frankenstein Go online for free on Fun Play!",
    "thumb": "ats/thumbs/frankensteingo.jpg",
    "url": "https://play.famobi.com/frankenstein-go/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "omnomconnectclassic",
    "title": "Om Nom Connect Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Om Nom Connect Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/omnomconnectclassic.jpg",
    "url": "https://play.famobi.com/om-nom-connect-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "omnombubbles",
    "title": "Om Nom Bubbles",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Om Nom Bubbles online for free on Fun Play!",
    "thumb": "ats/thumbs/omnombubbles.jpg",
    "url": "https://play.famobi.com/om-nom-bubbles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "popit3d",
    "title": "Pop It! 3D",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Pop It! 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/popit3d.jpg",
    "url": "https://play.famobi.com/pop-it-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "traffictom",
    "title": "Traffic Tom",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Traffic Tom online for free on Fun Play!",
    "thumb": "ats/thumbs/traffictom.jpg",
    "url": "https://play.famobi.com/traffic-tom/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "onetgallery3d",
    "title": "Onet Gallery 3D",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Onet Gallery 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/onetgallery3d.jpg",
    "url": "https://play.famobi.com/onet-gallery-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "omnomrun",
    "title": "Om Nom Run",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Om Nom Run online for free on Fun Play!",
    "thumb": "ats/thumbs/omnomrun.jpg",
    "url": "https://play.famobi.com/om-nom-run/A1000-10",
    "type": "external",
    "adfree": false,
    "trendingVideo": "https://videos.crazygames.com/om-nom-run/3/om-nom-run-landscape-364x208_30fps.mp4"
  },
  {
    "id": "europenaltycup2021",
    "title": "Euro Penalty Cup 2021",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Euro Penalty Cup 2021 online for free on Fun Play!",
    "thumb": "ats/thumbs/europenaltycup2021.jpg",
    "url": "https://play.famobi.com/euro-penalty-cup-2021/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "train2048",
    "title": "Train 2048",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Train 2048 online for free on Fun Play!",
    "thumb": "ats/thumbs/train2048.jpg",
    "url": "https://play.famobi.com/train-2048/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "giant2048",
    "title": "Giant 2048",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Giant 2048 online for free on Fun Play!",
    "thumb": "ats/thumbs/giant2048.jpg",
    "url": "https://play.famobi.com/giant-2048/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fuzzies",
    "title": "Fuzzies",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Fuzzies online for free on Fun Play!",
    "thumb": "ats/thumbs/fuzzies.jpg",
    "url": "https://play.famobi.com/fuzzies/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "gardenbloom",
    "title": "Garden Bloom",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Garden Bloom online for free on Fun Play!",
    "thumb": "ats/thumbs/gardenbloom.jpg",
    "url": "https://play.famobi.com/garden-bloom/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "braintrainer",
    "title": "Brain Trainer",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Brain Trainer online for free on Fun Play!",
    "thumb": "ats/thumbs/braintrainer.jpg",
    "url": "https://play.famobi.com/brain-trainer/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "gardenmatch3d",
    "title": "Garden Match 3D",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Garden Match 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/gardenmatch3d.jpg",
    "url": "https://play.famobi.com/garden-match-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pullpins",
    "title": "Pull Pins",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Pull Pins online for free on Fun Play!",
    "thumb": "ats/thumbs/pullpins.jpg",
    "url": "https://play.famobi.com/pull-pins/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bubbletower3d",
    "title": "Bubble Tower 3D",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Bubble Tower 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/bubbletower3d.jpg",
    "url": "https://play.famobi.com/bubble-tower-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mahjongworld",
    "title": "Mahjong World",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Mahjong World online for free on Fun Play!",
    "thumb": "ats/thumbs/mahjongworld.jpg",
    "url": "https://play.famobi.com/mahjong-world/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "busparking3d",
    "title": "Bus Parking 3D",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Bus Parking 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/busparking3d.jpg",
    "url": "https://play.famobi.com/bus-parking-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "crazycaves",
    "title": "Crazy Caves",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Crazy Caves online for free on Fun Play!",
    "thumb": "ats/thumbs/crazycaves.jpg",
    "url": "https://play.famobi.com/crazy-caves/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "hooproyale",
    "title": "Hoop Royale",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Hoop Royale online for free on Fun Play!",
    "thumb": "ats/thumbs/hooproyale.jpg",
    "url": "https://play.famobi.com/hoop-royale/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tntbomb",
    "title": "TNT Bomb",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play TNT Bomb online for free on Fun Play!",
    "thumb": "ats/thumbs/tntbomb.jpg",
    "url": "https://play.famobi.com/tnt-bomb/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "smartybubbles2",
    "title": "Smarty Bubbles 2",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Smarty Bubbles 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/smartybubbles2.jpg",
    "url": "https://play.famobi.com/smarty-bubbles-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "stacksmash",
    "title": "Stack Smash",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Stack Smash online for free on Fun Play!",
    "thumb": "ats/thumbs/stacksmash.jpg",
    "url": "https://play.famobi.com/stack-smash/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mahjong3d",
    "title": "Mahjong 3D",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Mahjong 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/mahjong3d.jpg",
    "url": "https://play.famobi.com/mahjong-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "monkeybounce",
    "title": "Monkey Bounce",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Monkey Bounce online for free on Fun Play!",
    "thumb": "ats/thumbs/monkeybounce.jpg",
    "url": "https://play.famobi.com/monkey-bounce/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "curveball3d",
    "title": "Curve Ball 3D",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Curve Ball 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/curveball3d.jpg",
    "url": "https://play.famobi.com/curve-ball-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "slicerush",
    "title": "Slice Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Slice Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/slicerush.jpg",
    "url": "https://play.famobi.com/slice-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "hippopizzachef",
    "title": "Hippo Pizza Chef",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Hippo Pizza Chef online for free on Fun Play!",
    "thumb": "ats/thumbs/hippopizzachef.jpg",
    "url": "https://play.famobi.com/hippo-pizza-chef/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dominofrenzy",
    "title": "Domino Frenzy",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Domino Frenzy online for free on Fun Play!",
    "thumb": "ats/thumbs/dominofrenzy.jpg",
    "url": "https://play.famobi.com/domino-frenzy/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cannonballs3d",
    "title": "Cannon Balls 3D",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Cannon Balls 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/cannonballs3d.jpg",
    "url": "https://play.famobi.com/cannon-balls-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "petsrush",
    "title": "Pets Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Pets Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/petsrush.jpg",
    "url": "https://play.famobi.com/pets-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "zoofeeder",
    "title": "Zoo Feeder",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Zoo Feeder online for free on Fun Play!",
    "thumb": "ats/thumbs/zoofeeder.jpg",
    "url": "https://play.famobi.com/zoo-feeder/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "crossover21",
    "title": "Crossover 21",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Crossover 21 online for free on Fun Play!",
    "thumb": "ats/thumbs/crossover21.jpg",
    "url": "https://play.famobi.com/crossover-21/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "elementballs",
    "title": "Element Balls",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Element Balls online for free on Fun Play!",
    "thumb": "ats/thumbs/elementballs.jpg",
    "url": "https://play.famobi.com/element-balls/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "towercrash3d",
    "title": "Tower Crash 3D",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Tower Crash 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/towercrash3d.jpg",
    "url": "https://play.famobi.com/tower-crash-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sushiroll",
    "title": "Sushi Roll",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Sushi Roll online for free on Fun Play!",
    "thumb": "ats/thumbs/sushiroll.jpg",
    "url": "https://play.famobi.com/sushi-roll/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "onetworld",
    "title": "Onet World",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Onet World online for free on Fun Play!",
    "thumb": "ats/thumbs/onetworld.jpg",
    "url": "https://play.famobi.com/onet-world/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "blockspuzzlezoo",
    "title": "Blocks Puzzle Zoo",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Blocks Puzzle Zoo online for free on Fun Play!",
    "thumb": "ats/thumbs/blockspuzzlezoo.jpg",
    "url": "https://play.famobi.com/blocks-puzzle-zoo/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "emergencysurgery",
    "title": "Emergency Surgery",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Emergency Surgery online for free on Fun Play!",
    "thumb": "ats/thumbs/emergencysurgery.jpg",
    "url": "https://play.famobi.com/emergency-surgery/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "elementblocks",
    "title": "Element Blocks",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Element Blocks online for free on Fun Play!",
    "thumb": "ats/thumbs/elementblocks.jpg",
    "url": "https://play.famobi.com/element-blocks/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "zooboom",
    "title": "Zoo Boom",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Zoo Boom online for free on Fun Play!",
    "thumb": "ats/thumbs/zooboom.jpg",
    "url": "https://play.famobi.com/zoo-boom/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "piratecards",
    "title": "Pirate Cards",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Pirate Cards online for free on Fun Play!",
    "thumb": "ats/thumbs/piratecards.jpg",
    "url": "https://play.famobi.com/pirate-cards/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "motox3mpoolparty",
    "title": "Moto X3M Pool Party",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Moto X3M Pool Party online for free on Fun Play!",
    "thumb": "ats/thumbs/motox3mpoolparty.jpg",
    "url": "https://play.famobi.com/moto-x3m-pool-party/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wiggle",
    "title": "Wiggle",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Wiggle online for free on Fun Play!",
    "thumb": "ats/thumbs/wiggle.jpg",
    "url": "https://play.famobi.com/wiggle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "adventuredrivers",
    "title": "Adventure Drivers",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Adventure Drivers online for free on Fun Play!",
    "thumb": "ats/thumbs/adventuredrivers.jpg",
    "url": "https://play.famobi.com/adventure-drivers/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "motox3m",
    "title": "Moto X3M",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Moto X3M online for free on Fun Play!",
    "thumb": "ats/thumbs/motox3m.jpg",
    "url": "https://play.famobi.com/moto-x3m/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "solitairelegend",
    "title": "Solitaire Legend",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Solitaire Legend online for free on Fun Play!",
    "thumb": "ats/thumbs/solitairelegend.jpg",
    "url": "https://play.famobi.com/solitaire-legend/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kawaiichibicreator",
    "title": "Kawaii Chibi Creator",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Kawaii Chibi Creator online for free on Fun Play!",
    "thumb": "ats/thumbs/kawaiichibicreator.jpg",
    "url": "https://play.famobi.com/kawaii-chibi-creator/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "findinmind",
    "title": "Find In Mind",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Find In Mind online for free on Fun Play!",
    "thumb": "ats/thumbs/findinmind.jpg",
    "url": "https://play.famobi.com/find-in-mind/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "highhills",
    "title": "High Hills",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play High Hills online for free on Fun Play!",
    "thumb": "ats/thumbs/highhills.jpg",
    "url": "https://play.famobi.com/high-hills/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mergejewels",
    "title": "Merge Jewels",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Merge Jewels online for free on Fun Play!",
    "thumb": "ats/thumbs/mergejewels.jpg",
    "url": "https://play.famobi.com/merge-jewels/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kniferain",
    "title": "Knife Rain",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Knife Rain online for free on Fun Play!",
    "thumb": "ats/thumbs/kniferain.jpg",
    "url": "https://play.famobi.com/knife-rain/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "maze",
    "title": "Maze",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "168K",
    "desc": "Play Maze online for free on Fun Play!",
    "thumb": "ats/thumbs/maze.jpg",
    "url": "https://play.famobi.com/maze/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "1000blocks",
    "title": "1000 Blocks",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play 1000 Blocks online for free on Fun Play!",
    "thumb": "ats/thumbs/1000blocks.jpg",
    "url": "https://play.famobi.com/1000-blocks/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bunnyquest",
    "title": "Bunny Quest",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Bunny Quest online for free on Fun Play!",
    "thumb": "ats/thumbs/bunnyquest.jpg",
    "url": "https://play.famobi.com/bunny-quest/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dragracingclub",
    "title": "Drag Racing Club",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Drag Racing Club online for free on Fun Play!",
    "thumb": "ats/thumbs/dragracingclub.jpg",
    "url": "https://play.famobi.com/drag-racing-club/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3dbasketball",
    "title": "3D Basketball",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play 3D Basketball online for free on Fun Play!",
    "thumb": "ats/thumbs/3dbasketball.jpg",
    "url": "https://play.famobi.com/3d-basketball/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3ddarts",
    "title": "3D Darts",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play 3D Darts online for free on Fun Play!",
    "thumb": "ats/thumbs/3ddarts.jpg",
    "url": "https://play.famobi.com/3d-darts/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3dchess",
    "title": "3D Chess",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play 3D Chess online for free on Fun Play!",
    "thumb": "ats/thumbs/3dchess.jpg",
    "url": "https://play.famobi.com/3d-chess/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "babylilycare",
    "title": "Baby Lily Care ",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Baby Lily Care  online for free on Fun Play!",
    "thumb": "ats/thumbs/babylilycare.jpg",
    "url": "https://play.famobi.com/baby-lily-care/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "babylilybirthday",
    "title": "Baby Lily Birthday",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Baby Lily Birthday online for free on Fun Play!",
    "thumb": "ats/thumbs/babylilybirthday.jpg",
    "url": "https://play.famobi.com/baby-lily-birthday/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "babylilysickday",
    "title": "Baby Lily Sick Day",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Baby Lily Sick Day online for free on Fun Play!",
    "thumb": "ats/thumbs/babylilysickday.jpg",
    "url": "https://play.famobi.com/baby-lily-sick-day/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dunkbrush",
    "title": "Dunk Brush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Dunk Brush online for free on Fun Play!",
    "thumb": "ats/thumbs/dunkbrush.jpg",
    "url": "https://play.famobi.com/dunk-brush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "goalkeeperchamp",
    "title": "Goalkeeper Champ",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Goalkeeper Champ online for free on Fun Play!",
    "thumb": "ats/thumbs/goalkeeperchamp.jpg",
    "url": "https://play.famobi.com/goalkeeper-champ/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "myfairytaledeer",
    "title": "My Fairytale Deer",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play My Fairytale Deer online for free on Fun Play!",
    "thumb": "ats/thumbs/myfairytaledeer.jpg",
    "url": "https://play.famobi.com/my-fairytale-deer/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "myfairytalewaterhorse",
    "title": "My Fairytale Water Horse ",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "457K",
    "desc": "Play My Fairytale Water Horse  online for free on Fun Play!",
    "thumb": "ats/thumbs/myfairytalewaterhorse.jpg",
    "url": "https://play.famobi.com/my-fairytale-water-horse/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "blazekick",
    "title": "Blaze Kick",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Blaze Kick online for free on Fun Play!",
    "thumb": "ats/thumbs/blazekick.jpg",
    "url": "https://play.famobi.com/blaze-kick/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happypanda",
    "title": "Happy Panda",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Happy Panda online for free on Fun Play!",
    "thumb": "ats/thumbs/happypanda.jpg",
    "url": "https://play.famobi.com/happy-panda/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happykoala",
    "title": "Happy Koala",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Happy Koala online for free on Fun Play!",
    "thumb": "ats/thumbs/happykoala.jpg",
    "url": "https://play.famobi.com/happy-koala/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "perfectpiano",
    "title": "Perfect Piano",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Perfect Piano online for free on Fun Play!",
    "thumb": "ats/thumbs/perfectpiano.jpg",
    "url": "https://play.famobi.com/perfect-piano/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sailorgirlsavatarmaker",
    "title": "Sailor Girls Avatar Maker",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "474K",
    "desc": "Play Sailor Girls Avatar Maker online for free on Fun Play!",
    "thumb": "ats/thumbs/sailorgirlsavatarmaker.jpg",
    "url": "https://play.famobi.com/sailor-girls-avatar-maker/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cheapgolf",
    "title": "Cheap Golf",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Cheap Golf online for free on Fun Play!",
    "thumb": "ats/thumbs/cheapgolf.jpg",
    "url": "https://play.famobi.com/cheap-golf/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jigsawpuzzledeluxe",
    "title": "Jigsaw Puzzle Deluxe",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Jigsaw Puzzle Deluxe online for free on Fun Play!",
    "thumb": "ats/thumbs/jigsawpuzzledeluxe.jpg",
    "url": "https://play.famobi.com/jigsaw-puzzle-deluxe/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3danimefantasy",
    "title": "3D Anime Fantasy",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play 3D Anime Fantasy online for free on Fun Play!",
    "thumb": "ats/thumbs/3danimefantasy.jpg",
    "url": "https://play.famobi.com/3d-anime-fantasy/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bubblewoods",
    "title": "Bubble Woods",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Bubble Woods online for free on Fun Play!",
    "thumb": "ats/thumbs/bubblewoods.jpg",
    "url": "https://play.famobi.com/bubble-woods/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3dfreekickworldcup18",
    "title": "3D Free Kick World Cup 18",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play 3D Free Kick World Cup 18 online for free on Fun Play!",
    "thumb": "ats/thumbs/3dfreekickworldcup18.jpg",
    "url": "https://play.famobi.com/3d-free-kick-world-cup-18/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cuteunicorncare",
    "title": "Cute Unicorn Care",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Cute Unicorn Care online for free on Fun Play!",
    "thumb": "ats/thumbs/cuteunicorncare.jpg",
    "url": "https://play.famobi.com/cute-unicorn-care/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kumbakool",
    "title": "Kumba Kool",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Kumba Kool online for free on Fun Play!",
    "thumb": "ats/thumbs/kumbakool.jpg",
    "url": "https://play.famobi.com/kumba-kool/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3dairhockey",
    "title": "3D Air Hockey ",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play 3D Air Hockey  online for free on Fun Play!",
    "thumb": "ats/thumbs/3dairhockey.jpg",
    "url": "https://play.famobi.com/3d-air-hockey/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "soccerchamp2018",
    "title": "Soccer Champ 2018",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Soccer Champ 2018 online for free on Fun Play!",
    "thumb": "ats/thumbs/soccerchamp2018.jpg",
    "url": "https://play.famobi.com/soccer-champ-2018/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3dbowling",
    "title": "3D Bowling",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play 3D Bowling online for free on Fun Play!",
    "thumb": "ats/thumbs/3dbowling.jpg",
    "url": "https://play.famobi.com/3d-bowling/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3dfreekick",
    "title": "3D Free Kick",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play 3D Free Kick online for free on Fun Play!",
    "thumb": "ats/thumbs/3dfreekick.jpg",
    "url": "https://play.famobi.com/3d-free-kick/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "soccertasticworldcup18",
    "title": "Soccertastic World Cup 18",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "474K",
    "desc": "Play Soccertastic World Cup 18 online for free on Fun Play!",
    "thumb": "ats/thumbs/soccertasticworldcup18.jpg",
    "url": "https://play.famobi.com/soccertastic-world-cup-18/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "myfairytaletiger",
    "title": "My Fairytale Tiger",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play My Fairytale Tiger online for free on Fun Play!",
    "thumb": "ats/thumbs/myfairytaletiger.jpg",
    "url": "https://play.famobi.com/my-fairytale-tiger/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happylemur",
    "title": "Happy Lemur",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Happy Lemur online for free on Fun Play!",
    "thumb": "ats/thumbs/happylemur.jpg",
    "url": "https://play.famobi.com/happy-lemur/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pierealifecooking",
    "title": "Pie Realife Cooking",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Pie Realife Cooking online for free on Fun Play!",
    "thumb": "ats/thumbs/pierealifecooking.jpg",
    "url": "https://play.famobi.com/pie-realife-cooking/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tapmywater",
    "title": "Tap My Water",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Tap My Water online for free on Fun Play!",
    "thumb": "ats/thumbs/tapmywater.jpg",
    "url": "https://play.famobi.com/tap-my-water/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pizzarealifecooking",
    "title": "Pizza Realife Cooking",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Pizza Realife Cooking online for free on Fun Play!",
    "thumb": "ats/thumbs/pizzarealifecooking.jpg",
    "url": "https://play.famobi.com/pizza-realife-cooking/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "worldcuppenalty2018",
    "title": "World Cup Penalty 2018",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play World Cup Penalty 2018 online for free on Fun Play!",
    "thumb": "ats/thumbs/worldcuppenalty2018.jpg",
    "url": "https://play.famobi.com/world-cup-penalty-2018/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "raceright",
    "title": "Race Right",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Race Right online for free on Fun Play!",
    "thumb": "ats/thumbs/raceright.jpg",
    "url": "https://play.famobi.com/race-right/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mahjongflowers",
    "title": "Mahjong Flowers",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Mahjong Flowers online for free on Fun Play!",
    "thumb": "ats/thumbs/mahjongflowers.jpg",
    "url": "https://play.famobi.com/mahjong-flowers/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninadetective",
    "title": "Nina - Detective ",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Nina - Detective  online for free on Fun Play!",
    "thumb": "ats/thumbs/ninadetective.jpg",
    "url": "https://play.famobi.com/nina-detective/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "8ballbilliardsclassic",
    "title": "8 Ball Billiards Classic",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "457K",
    "desc": "Play 8 Ball Billiards Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/8ballbilliardsclassic.jpg",
    "url": "https://play.famobi.com/8-ball-billiards-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinadetective",
    "title": "Tina - Detective ",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Tina - Detective  online for free on Fun Play!",
    "thumb": "ats/thumbs/tinadetective.jpg",
    "url": "https://play.famobi.com/tina-detective/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cutepuppycare",
    "title": "Cute Puppy Care",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Cute Puppy Care online for free on Fun Play!",
    "thumb": "ats/thumbs/cutepuppycare.jpg",
    "url": "https://play.famobi.com/cute-puppy-care/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dominoesclassic",
    "title": "Dominoes Classic",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Dominoes Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/dominoesclassic.jpg",
    "url": "https://play.famobi.com/dominoes-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cutekittycare",
    "title": "Cute Kitty Care",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Cute Kitty Care online for free on Fun Play!",
    "thumb": "ats/thumbs/cutekittycare.jpg",
    "url": "https://play.famobi.com/cute-kitty-care/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinapopstar",
    "title": "Tina - Pop Star",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Tina - Pop Star online for free on Fun Play!",
    "thumb": "ats/thumbs/tinapopstar.jpg",
    "url": "https://play.famobi.com/tina-pop-star/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninapopstar",
    "title": "Nina - Pop Star",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Nina - Pop Star online for free on Fun Play!",
    "thumb": "ats/thumbs/ninapopstar.jpg",
    "url": "https://play.famobi.com/nina-pop-star/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kitchenmahjongclassic",
    "title": "Kitchen Mahjong Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "457K",
    "desc": "Play Kitchen Mahjong Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/kitchenmahjongclassic.jpg",
    "url": "https://play.famobi.com/kitchen-mahjong-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "deflyio",
    "title": "Defly.io",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Defly.io online for free on Fun Play!",
    "thumb": "ats/thumbs/deflyio.jpg",
    "url": "https://play.famobi.com/deflyio/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mahjongconnectclassic",
    "title": "Mahjong Connect Classic ",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "457K",
    "desc": "Play Mahjong Connect Classic  online for free on Fun Play!",
    "thumb": "ats/thumbs/mahjongconnectclassic.jpg",
    "url": "https://play.famobi.com/mahjong-connect-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "colorpixelartclassic",
    "title": "Color Pixel Art Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Color Pixel Art Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/colorpixelartclassic.jpg",
    "url": "https://play.famobi.com/color-pixel-art-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "myfairytaleunicorn",
    "title": "My Fairytale Unicorn",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play My Fairytale Unicorn online for free on Fun Play!",
    "thumb": "ats/thumbs/myfairytaleunicorn.jpg",
    "url": "https://play.famobi.com/my-fairytale-unicorn/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "myfairytalegriffin",
    "title": "My Fairytale Griffin",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play My Fairytale Griffin online for free on Fun Play!",
    "thumb": "ats/thumbs/myfairytalegriffin.jpg",
    "url": "https://play.famobi.com/my-fairytale-griffin/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "archeryworldtour",
    "title": "Archery World Tour",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Archery World Tour online for free on Fun Play!",
    "thumb": "ats/thumbs/archeryworldtour.jpg",
    "url": "https://play.famobi.com/archery-world-tour/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happyelephant",
    "title": "Happy Elephant ",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Happy Elephant  online for free on Fun Play!",
    "thumb": "ats/thumbs/happyelephant.jpg",
    "url": "https://play.famobi.com/happy-elephant/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "myfairytalewolf",
    "title": "My Fairytale Wolf",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play My Fairytale Wolf online for free on Fun Play!",
    "thumb": "ats/thumbs/myfairytalewolf.jpg",
    "url": "https://play.famobi.com/my-fairytale-wolf/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "myfairytaledragon",
    "title": "My Fairytale Dragon",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play My Fairytale Dragon online for free on Fun Play!",
    "thumb": "ats/thumbs/myfairytaledragon.jpg",
    "url": "https://play.famobi.com/my-fairytale-dragon/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "thelittlegiant",
    "title": "The Little Giant",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play The Little Giant online for free on Fun Play!",
    "thumb": "ats/thumbs/thelittlegiant.jpg",
    "url": "https://play.famobi.com/the-little-giant/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "surferarchers",
    "title": "Surfer Archers",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Surfer Archers online for free on Fun Play!",
    "thumb": "ats/thumbs/surferarchers.jpg",
    "url": "https://play.famobi.com/surfer-archers/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happychipmunk",
    "title": "Happy Chipmunk",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Happy Chipmunk online for free on Fun Play!",
    "thumb": "ats/thumbs/happychipmunk.jpg",
    "url": "https://play.famobi.com/happy-chipmunk/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happybunny",
    "title": "Happy Bunny",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Happy Bunny online for free on Fun Play!",
    "thumb": "ats/thumbs/happybunny.jpg",
    "url": "https://play.famobi.com/happy-bunny/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happyfox",
    "title": "Happy Fox",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Happy Fox online for free on Fun Play!",
    "thumb": "ats/thumbs/happyfox.jpg",
    "url": "https://play.famobi.com/happy-fox/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wordsearchclassic",
    "title": "Word Search Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Word Search Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/wordsearchclassic.jpg",
    "url": "https://play.famobi.com/word-search-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninacostumeparty",
    "title": "Nina - Costume Party",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Nina - Costume Party online for free on Fun Play!",
    "thumb": "ats/thumbs/ninacostumeparty.jpg",
    "url": "https://play.famobi.com/nina-costume-party/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinacostumeparty",
    "title": "Tina - Costume Party",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Tina - Costume Party online for free on Fun Play!",
    "thumb": "ats/thumbs/tinacostumeparty.jpg",
    "url": "https://play.famobi.com/tina-costume-party/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninagreatsummerday",
    "title": "Nina - Great Summer Day",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Nina - Great Summer Day online for free on Fun Play!",
    "thumb": "ats/thumbs/ninagreatsummerday.jpg",
    "url": "https://play.famobi.com/nina-great-summer-day/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinagreatsummerday",
    "title": "Tina - Great Summer Day",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Tina - Great Summer Day online for free on Fun Play!",
    "thumb": "ats/thumbs/tinagreatsummerday.jpg",
    "url": "https://play.famobi.com/tina-great-summer-day/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "streethoops3d",
    "title": "Street Hoops 3D",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Street Hoops 3D online for free on Fun Play!",
    "thumb": "ats/thumbs/streethoops3d.jpg",
    "url": "https://play.famobi.com/street-hoops-3d/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "squarestacker",
    "title": "Square Stacker",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Square Stacker online for free on Fun Play!",
    "thumb": "ats/thumbs/squarestacker.jpg",
    "url": "https://play.famobi.com/square-stacker/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "find500differences",
    "title": "Find 500 Differences",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Find 500 Differences online for free on Fun Play!",
    "thumb": "ats/thumbs/find500differences.jpg",
    "url": "https://play.famobi.com/find-500-differences/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bffshouseparty",
    "title": "BFFs House Party",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play BFFs House Party online for free on Fun Play!",
    "thumb": "ats/thumbs/bffshouseparty.jpg",
    "url": "https://play.famobi.com/bffs-house-party/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "theways",
    "title": "The Ways",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play The Ways online for free on Fun Play!",
    "thumb": "ats/thumbs/theways.jpg",
    "url": "https://play.famobi.com/the-ways/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "totemiacursedmarbles",
    "title": "Totemia: Cursed Marbles",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Totemia: Cursed Marbles online for free on Fun Play!",
    "thumb": "ats/thumbs/totemiacursedmarbles.jpg",
    "url": "https://play.famobi.com/totemia-cursed-marbles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mafiapoker",
    "title": "Mafia Poker",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Mafia Poker online for free on Fun Play!",
    "thumb": "ats/thumbs/mafiapoker.jpg",
    "url": "https://play.famobi.com/mafia-poker/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinaairlines",
    "title": "Tina - Airlines",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Tina - Airlines online for free on Fun Play!",
    "thumb": "ats/thumbs/tinaairlines.jpg",
    "url": "https://play.famobi.com/tina-airlines/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wintermakeup",
    "title": "Winter Makeup",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Winter Makeup online for free on Fun Play!",
    "thumb": "ats/thumbs/wintermakeup.jpg",
    "url": "https://play.famobi.com/winter-makeup/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jewelaquarium",
    "title": "Jewel Aquarium",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Jewel Aquarium online for free on Fun Play!",
    "thumb": "ats/thumbs/jewelaquarium.jpg",
    "url": "https://play.famobi.com/jewel-aquarium/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "yatzyclassic",
    "title": "Yatzy Classic",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Yatzy Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/yatzyclassic.jpg",
    "url": "https://play.famobi.com/yatzy-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bikerstreet",
    "title": "Biker Street",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Biker Street online for free on Fun Play!",
    "thumb": "ats/thumbs/bikerstreet.jpg",
    "url": "https://play.famobi.com/biker-street/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "slamdunkbasketball",
    "title": "Slam Dunk Basketball",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Slam Dunk Basketball online for free on Fun Play!",
    "thumb": "ats/thumbs/slamdunkbasketball.jpg",
    "url": "https://play.famobi.com/slam-dunk-basketball/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "angryflappywings",
    "title": "Angry Flappy Wings",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Angry Flappy Wings online for free on Fun Play!",
    "thumb": "ats/thumbs/angryflappywings.jpg",
    "url": "https://play.famobi.com/angry-flappy-wings/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "worddetector",
    "title": "Word Detector",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Word Detector online for free on Fun Play!",
    "thumb": "ats/thumbs/worddetector.jpg",
    "url": "https://play.famobi.com/word-detector/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jewelchristmas",
    "title": "Jewel Christmas",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Jewel Christmas online for free on Fun Play!",
    "thumb": "ats/thumbs/jewelchristmas.jpg",
    "url": "https://play.famobi.com/jewel-christmas/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninaairlines",
    "title": "Nina - Airlines",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Nina - Airlines online for free on Fun Play!",
    "thumb": "ats/thumbs/ninaairlines.jpg",
    "url": "https://play.famobi.com/nina-airlines/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "onetconnectchristmas",
    "title": "Onet Connect Christmas",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Onet Connect Christmas online for free on Fun Play!",
    "thumb": "ats/thumbs/onetconnectchristmas.jpg",
    "url": "https://play.famobi.com/onet-connect-christmas/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "highwayriderextreme",
    "title": "Highway Rider Extreme",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Highway Rider Extreme online for free on Fun Play!",
    "thumb": "ats/thumbs/highwayriderextreme.jpg",
    "url": "https://play.famobi.com/highway-rider-extreme/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dragonfireampfury",
    "title": "Dragon: Fire &amp; Fury",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Dragon: Fire &amp; Fury online for free on Fun Play!",
    "thumb": "ats/thumbs/dragonfireampfury.jpg",
    "url": "https://play.famobi.com/dragon-fire-fury/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "solitaireclassicchristmas",
    "title": "Solitaire Classic Christmas",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "125K",
    "desc": "Play Solitaire Classic Christmas online for free on Fun Play!",
    "thumb": "ats/thumbs/solitaireclassicchristmas.jpg",
    "url": "https://play.famobi.com/solitaire-classic-christmas/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "matchingcardheroes",
    "title": "Matching Card Heroes",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Matching Card Heroes online for free on Fun Play!",
    "thumb": "ats/thumbs/matchingcardheroes.jpg",
    "url": "https://play.famobi.com/matching-card-heroes/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happydog",
    "title": "Happy Dog",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Happy Dog online for free on Fun Play!",
    "thumb": "ats/thumbs/happydog.jpg",
    "url": "https://play.famobi.com/happy-dog/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fruitcrushfrenzy",
    "title": "Fruit Crush Frenzy",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Fruit Crush Frenzy online for free on Fun Play!",
    "thumb": "ats/thumbs/fruitcrushfrenzy.jpg",
    "url": "https://play.famobi.com/fruit-crush-frenzy/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninaballetstar",
    "title": "Nina Ballet Star",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Nina Ballet Star online for free on Fun Play!",
    "thumb": "ats/thumbs/ninaballetstar.jpg",
    "url": "https://play.famobi.com/nina-ballet-star/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "citydunk",
    "title": "City Dunk",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play City Dunk online for free on Fun Play!",
    "thumb": "ats/thumbs/citydunk.jpg",
    "url": "https://play.famobi.com/city-dunk/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinaballetstar",
    "title": "Tina Ballet Star",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Tina Ballet Star online for free on Fun Play!",
    "thumb": "ats/thumbs/tinaballetstar.jpg",
    "url": "https://play.famobi.com/tina-ballet-star/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "hexzen",
    "title": "Hex Zen",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Hex Zen online for free on Fun Play!",
    "thumb": "ats/thumbs/hexzen.jpg",
    "url": "https://play.famobi.com/hex-zen/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kittenmatch",
    "title": "Kitten Match",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Kitten Match online for free on Fun Play!",
    "thumb": "ats/thumbs/kittenmatch.jpg",
    "url": "https://play.famobi.com/kitten-match/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "colorshape",
    "title": "Color Shape",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Color Shape online for free on Fun Play!",
    "thumb": "ats/thumbs/colorshape.jpg",
    "url": "https://play.famobi.com/color-shape/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3dsolitaire",
    "title": "3D Solitaire",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play 3D Solitaire online for free on Fun Play!",
    "thumb": "ats/thumbs/3dsolitaire.jpg",
    "url": "https://play.famobi.com/3d-solitaire/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ginrummyplus",
    "title": "Gin Rummy Plus",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Gin Rummy Plus online for free on Fun Play!",
    "thumb": "ats/thumbs/ginrummyplus.jpg",
    "url": "https://play.famobi.com/gin-rummy-plus/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "motofury",
    "title": "Moto Fury",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Moto Fury online for free on Fun Play!",
    "thumb": "ats/thumbs/motofury.jpg",
    "url": "https://play.famobi.com/moto-fury/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jungleroller",
    "title": "Jungle Roller",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Jungle Roller online for free on Fun Play!",
    "thumb": "ats/thumbs/jungleroller.jpg",
    "url": "https://play.famobi.com/jungle-roller/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "basketmonsterz",
    "title": "Basket Monsterz",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Basket Monsterz online for free on Fun Play!",
    "thumb": "ats/thumbs/basketmonsterz.jpg",
    "url": "https://play.famobi.com/basket-monsterz/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jewelduel",
    "title": "Jewel Duel",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Jewel Duel online for free on Fun Play!",
    "thumb": "ats/thumbs/jewelduel.jpg",
    "url": "https://play.famobi.com/jewel-duel/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinalearntoballet",
    "title": "Tina - Learn To Ballet",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Tina - Learn To Ballet online for free on Fun Play!",
    "thumb": "ats/thumbs/tinalearntoballet.jpg",
    "url": "https://play.famobi.com/tina-learn-to-ballet/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinasurfergirl",
    "title": "Tina - Surfer Girl",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Tina - Surfer Girl online for free on Fun Play!",
    "thumb": "ats/thumbs/tinasurfergirl.jpg",
    "url": "https://play.famobi.com/tina-surfer-girl/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happycat",
    "title": "Happy Cat",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Happy Cat online for free on Fun Play!",
    "thumb": "ats/thumbs/happycat.jpg",
    "url": "https://play.famobi.com/happy-cat/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "piratesthematch3",
    "title": "Pirates! The Match-3",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Pirates! The Match-3 online for free on Fun Play!",
    "thumb": "ats/thumbs/piratesthematch3.jpg",
    "url": "https://play.famobi.com/pirates-the-match-3/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "allezhop",
    "title": "Allez Hop",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Allez Hop online for free on Fun Play!",
    "thumb": "ats/thumbs/allezhop.jpg",
    "url": "https://play.famobi.com/allez-hop/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "superplumberrun",
    "title": "Super Plumber Run",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Super Plumber Run online for free on Fun Play!",
    "thumb": "ats/thumbs/superplumberrun.jpg",
    "url": "https://play.famobi.com/super-plumber-run/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninasurfergirl",
    "title": "Nina - Surfer Girl",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Nina - Surfer Girl online for free on Fun Play!",
    "thumb": "ats/thumbs/ninasurfergirl.jpg",
    "url": "https://play.famobi.com/nina-surfer-girl/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "happypony",
    "title": "Happy Pony",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Happy Pony online for free on Fun Play!",
    "thumb": "ats/thumbs/happypony.jpg",
    "url": "https://play.famobi.com/happy-pony/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tabletennisworldtour",
    "title": "Table Tennis World Tour",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Table Tennis World Tour online for free on Fun Play!",
    "thumb": "ats/thumbs/tabletennisworldtour.jpg",
    "url": "https://play.famobi.com/table-tennis-world-tour/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "boatbattles",
    "title": "Boat Battles",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Boat Battles online for free on Fun Play!",
    "thumb": "ats/thumbs/boatbattles.jpg",
    "url": "https://play.famobi.com/boat-battles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "billiardblitzchallenge",
    "title": "Billiard Blitz Challenge",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "474K",
    "desc": "Play Billiard Blitz Challenge online for free on Fun Play!",
    "thumb": "ats/thumbs/billiardblitzchallenge.jpg",
    "url": "https://play.famobi.com/billiard-blitz-challenge/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinabacktoschool",
    "title": "Tina Back To School",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Tina Back To School online for free on Fun Play!",
    "thumb": "ats/thumbs/tinabacktoschool.jpg",
    "url": "https://play.famobi.com/tina-back-to-school/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jumpwithjustin",
    "title": "Jump With Justin",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Jump With Justin online for free on Fun Play!",
    "thumb": "ats/thumbs/jumpwithjustin.jpg",
    "url": "https://play.famobi.com/jump-with-justin/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "momopop",
    "title": "Momo Pop",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Momo Pop online for free on Fun Play!",
    "thumb": "ats/thumbs/momopop.jpg",
    "url": "https://play.famobi.com/momo-pop/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "duocards",
    "title": "Duo Cards",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Duo Cards online for free on Fun Play!",
    "thumb": "ats/thumbs/duocards.jpg",
    "url": "https://play.famobi.com/duo-cards/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "driftcupracing",
    "title": "Drift Cup Racing",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Drift Cup Racing online for free on Fun Play!",
    "thumb": "ats/thumbs/driftcupracing.jpg",
    "url": "https://play.famobi.com/drift-cup-racing/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "blackjackbet",
    "title": "Blackjack Bet",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Blackjack Bet online for free on Fun Play!",
    "thumb": "ats/thumbs/blackjackbet.jpg",
    "url": "https://play.famobi.com/blackjack-bet/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "doctoracorn2",
    "title": "Doctor Acorn 2",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Doctor Acorn 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/doctoracorn2.jpg",
    "url": "https://play.famobi.com/doctor-acorn-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninabacktoschool",
    "title": "Nina Back To School",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Nina Back To School online for free on Fun Play!",
    "thumb": "ats/thumbs/ninabacktoschool.jpg",
    "url": "https://play.famobi.com/nina-back-to-school/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fidgetspinnerdesigner",
    "title": "Fidget Spinner Designer",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "457K",
    "desc": "Play Fidget Spinner Designer online for free on Fun Play!",
    "thumb": "ats/thumbs/fidgetspinnerdesigner.jpg",
    "url": "https://play.famobi.com/fidget-spinner-designer/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "junglerun",
    "title": "Jungle Run",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Jungle Run online for free on Fun Play!",
    "thumb": "ats/thumbs/junglerun.jpg",
    "url": "https://play.famobi.com/jungle-run/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "okeyclassic",
    "title": "Okey Classic",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Okey Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/okeyclassic.jpg",
    "url": "https://play.famobi.com/okey-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "99balls",
    "title": "99 Balls",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play 99 Balls online for free on Fun Play!",
    "thumb": "ats/thumbs/99balls.jpg",
    "url": "https://play.famobi.com/99-balls/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "solitaireklondike",
    "title": "Solitaire Klondike",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Solitaire Klondike online for free on Fun Play!",
    "thumb": "ats/thumbs/solitaireklondike.jpg",
    "url": "https://play.famobi.com/solitaire-klondike/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "penaltyshootoutmultileague",
    "title": "Penalty Shootout: Multi League",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.6,
    "plays": "142K",
    "desc": "Play Penalty Shootout: Multi League online for free on Fun Play!",
    "thumb": "ats/thumbs/penaltyshootoutmultileague.jpg",
    "url": "https://play.famobi.com/penalty-shootout-multi-league/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinawedding",
    "title": "Tina Wedding",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Tina Wedding online for free on Fun Play!",
    "thumb": "ats/thumbs/tinawedding.jpg",
    "url": "https://play.famobi.com/tina-wedding/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninawedding",
    "title": "Nina Wedding",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Nina Wedding online for free on Fun Play!",
    "thumb": "ats/thumbs/ninawedding.jpg",
    "url": "https://play.famobi.com/nina-wedding/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bananarun",
    "title": "Banana Run",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Banana Run online for free on Fun Play!",
    "thumb": "ats/thumbs/bananarun.jpg",
    "url": "https://play.famobi.com/banana-run/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fidgetspinnerhighscore",
    "title": "Fidget Spinner High Score",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "474K",
    "desc": "Play Fidget Spinner High Score online for free on Fun Play!",
    "thumb": "ats/thumbs/fidgetspinnerhighscore.jpg",
    "url": "https://play.famobi.com/fidget-spinner-high-score/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "soccerheads",
    "title": "Soccer Heads",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Soccer Heads online for free on Fun Play!",
    "thumb": "ats/thumbs/soccerheads.jpg",
    "url": "https://play.famobi.com/soccer-heads/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "onetconnectclassic",
    "title": "Onet Connect Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Onet Connect Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/onetconnectclassic.jpg",
    "url": "https://play.famobi.com/onet-connect-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "baboorainbowpuzzle",
    "title": "Baboo: Rainbow Puzzle",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Baboo: Rainbow Puzzle online for free on Fun Play!",
    "thumb": "ats/thumbs/baboorainbowpuzzle.jpg",
    "url": "https://play.famobi.com/baboo-rainbow-puzzle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "racingmonstertrucks",
    "title": "Racing Monster Trucks",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Racing Monster Trucks online for free on Fun Play!",
    "thumb": "ats/thumbs/racingmonstertrucks.jpg",
    "url": "https://play.famobi.com/racing-monster-trucks/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kidsblockpuzzle",
    "title": "Kids Block Puzzle",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Kids Block Puzzle online for free on Fun Play!",
    "thumb": "ats/thumbs/kidsblockpuzzle.jpg",
    "url": "https://play.famobi.com/kids-block-puzzle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "birdyrush",
    "title": "Birdy Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Birdy Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/birdyrush.jpg",
    "url": "https://play.famobi.com/birdy-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "magicjewels",
    "title": "Magic Jewels",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Magic Jewels online for free on Fun Play!",
    "thumb": "ats/thumbs/magicjewels.jpg",
    "url": "https://play.famobi.com/magic-jewels/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "hexblitz",
    "title": "Hex Blitz",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Hex Blitz online for free on Fun Play!",
    "thumb": "ats/thumbs/hexblitz.jpg",
    "url": "https://play.famobi.com/hex-blitz/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "diamondrush",
    "title": "Diamond Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Diamond Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/diamondrush.jpg",
    "url": "https://play.famobi.com/diamond-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "goldminertom",
    "title": "Gold Miner Tom",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Gold Miner Tom online for free on Fun Play!",
    "thumb": "ats/thumbs/goldminertom.jpg",
    "url": "https://play.famobi.com/gold-miner-tom/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "freecellsolitaireclassic",
    "title": "FreeCell Solitaire Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "108K",
    "desc": "Play FreeCell Solitaire Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/freecellsolitaireclassic.jpg",
    "url": "https://play.famobi.com/freecell-solitaire-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "racingcars",
    "title": "Racing Cars",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Racing Cars online for free on Fun Play!",
    "thumb": "ats/thumbs/racingcars.jpg",
    "url": "https://play.famobi.com/racing-cars/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "7words",
    "title": "7 Words",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play 7 Words online for free on Fun Play!",
    "thumb": "ats/thumbs/7words.jpg",
    "url": "https://play.famobi.com/7-words/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pickalock",
    "title": "Pick A Lock",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Pick A Lock online for free on Fun Play!",
    "thumb": "ats/thumbs/pickalock.jpg",
    "url": "https://play.famobi.com/pick-a-lock/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "seabattleship",
    "title": "Sea Battleship",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Sea Battleship online for free on Fun Play!",
    "thumb": "ats/thumbs/seabattleship.jpg",
    "url": "https://play.famobi.com/sea-battleship/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fruitpulp",
    "title": "Fruit Pulp",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Fruit Pulp online for free on Fun Play!",
    "thumb": "ats/thumbs/fruitpulp.jpg",
    "url": "https://play.famobi.com/fruit-pulp/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "vikingsvsmonsters",
    "title": "Vikings vs Monsters",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Vikings vs Monsters online for free on Fun Play!",
    "thumb": "ats/thumbs/vikingsvsmonsters.jpg",
    "url": "https://play.famobi.com/vikings-vs-monsters/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "trucktrials",
    "title": "Truck Trials",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Truck Trials online for free on Fun Play!",
    "thumb": "ats/thumbs/trucktrials.jpg",
    "url": "https://play.famobi.com/truck-trials/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "penaltysuperstar",
    "title": "Penalty Superstar",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Penalty Superstar online for free on Fun Play!",
    "thumb": "ats/thumbs/penaltysuperstar.jpg",
    "url": "https://play.famobi.com/penalty-superstar/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wordbird",
    "title": "Word Bird",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Word Bird online for free on Fun Play!",
    "thumb": "ats/thumbs/wordbird.jpg",
    "url": "https://play.famobi.com/word-bird/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "carol039stempjob",
    "title": "Carol&#039;s Temp Job",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Carol&#039;s Temp Job online for free on Fun Play!",
    "thumb": "ats/thumbs/carol039stempjob.jpg",
    "url": "https://play.famobi.com/carols-temp-job/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "gymmania",
    "title": "Gym Mania",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Gym Mania online for free on Fun Play!",
    "thumb": "ats/thumbs/gymmania.jpg",
    "url": "https://play.famobi.com/gym-mania/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sailorpop",
    "title": "Sailor Pop",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Sailor Pop online for free on Fun Play!",
    "thumb": "ats/thumbs/sailorpop.jpg",
    "url": "https://play.famobi.com/sailor-pop/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "thugracer",
    "title": "Thug Racer",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Thug Racer online for free on Fun Play!",
    "thumb": "ats/thumbs/thugracer.jpg",
    "url": "https://play.famobi.com/thug-racer/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jewelsmania",
    "title": "Jewels Mania",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Jewels Mania online for free on Fun Play!",
    "thumb": "ats/thumbs/jewelsmania.jpg",
    "url": "https://play.famobi.com/jewels-mania/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mandalacoloringbook",
    "title": "Mandala Coloring Book",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Mandala Coloring Book online for free on Fun Play!",
    "thumb": "ats/thumbs/mandalacoloringbook.jpg",
    "url": "https://play.famobi.com/mandala-coloring-book/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bottleflipchallenge",
    "title": "Bottle Flip Challenge",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Bottle Flip Challenge online for free on Fun Play!",
    "thumb": "ats/thumbs/bottleflipchallenge.jpg",
    "url": "https://play.famobi.com/bottle-flip-challenge/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3dpenalty",
    "title": "3D Penalty",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play 3D Penalty online for free on Fun Play!",
    "thumb": "ats/thumbs/3dpenalty.jpg",
    "url": "https://play.famobi.com/3d-penalty/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "eleveneleven",
    "title": "Eleven Eleven",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Eleven Eleven online for free on Fun Play!",
    "thumb": "ats/thumbs/eleveneleven.jpg",
    "url": "https://play.famobi.com/eleven-eleven/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jigsawpuzzlexmas",
    "title": "Jigsaw Puzzle XMas",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Jigsaw Puzzle XMas online for free on Fun Play!",
    "thumb": "ats/thumbs/jigsawpuzzlexmas.jpg",
    "url": "https://play.famobi.com/jigsaw-puzzle-xmas/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "4inarow",
    "title": "4 In A Row",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play 4 In A Row online for free on Fun Play!",
    "thumb": "ats/thumbs/4inarow.jpg",
    "url": "https://play.famobi.com/4-in-a-row/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "candybubble",
    "title": "Candy Bubble",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Candy Bubble online for free on Fun Play!",
    "thumb": "ats/thumbs/candybubble.jpg",
    "url": "https://play.famobi.com/candy-bubble/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "endlesstruck",
    "title": "Endless Truck",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Endless Truck online for free on Fun Play!",
    "thumb": "ats/thumbs/endlesstruck.jpg",
    "url": "https://play.famobi.com/endless-truck/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "alienquest",
    "title": "Alien Quest",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Alien Quest online for free on Fun Play!",
    "thumb": "ats/thumbs/alienquest.jpg",
    "url": "https://play.famobi.com/alien-quest/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sweethangman",
    "title": "Sweet Hangman",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Sweet Hangman online for free on Fun Play!",
    "thumb": "ats/thumbs/sweethangman.jpg",
    "url": "https://play.famobi.com/sweet-hangman/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "colorpin",
    "title": "Color Pin",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Color Pin online for free on Fun Play!",
    "thumb": "ats/thumbs/colorpin.jpg",
    "url": "https://play.famobi.com/color-pin/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jeweljungle",
    "title": "Jewel Jungle ",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Jewel Jungle  online for free on Fun Play!",
    "thumb": "ats/thumbs/jeweljungle.jpg",
    "url": "https://play.famobi.com/jewel-jungle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "classicbowling",
    "title": "Classic Bowling",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Classic Bowling online for free on Fun Play!",
    "thumb": "ats/thumbs/classicbowling.jpg",
    "url": "https://play.famobi.com/classic-bowling/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "baseballpro",
    "title": "Baseball Pro",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Baseball Pro online for free on Fun Play!",
    "thumb": "ats/thumbs/baseballpro.jpg",
    "url": "https://play.famobi.com/baseball-pro/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "reversi",
    "title": "Reversi",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Reversi online for free on Fun Play!",
    "thumb": "ats/thumbs/reversi.jpg",
    "url": "https://play.famobi.com/reversi/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mahjongmaster2",
    "title": "Mahjong Master 2",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Mahjong Master 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/mahjongmaster2.jpg",
    "url": "https://play.famobi.com/mahjong-master-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "4xpuzzle",
    "title": "4x Puzzle",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play 4x Puzzle online for free on Fun Play!",
    "thumb": "ats/thumbs/4xpuzzle.jpg",
    "url": "https://play.famobi.com/4x-puzzle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kidscolorbook2",
    "title": "Kids Color Book 2",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Kids Color Book 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/kidscolorbook2.jpg",
    "url": "https://play.famobi.com/kids-color-book-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jigsawpuzzleclassic",
    "title": "Jigsaw Puzzle Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Jigsaw Puzzle Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/jigsawpuzzleclassic.jpg",
    "url": "https://play.famobi.com/jigsaw-puzzle-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "colorpop",
    "title": "Colorpop",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Colorpop online for free on Fun Play!",
    "thumb": "ats/thumbs/colorpop.jpg",
    "url": "https://play.famobi.com/colorpop/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tripeakssolitaireclassic",
    "title": "Tri Peaks Solitaire Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "108K",
    "desc": "Play Tri Peaks Solitaire Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/tripeakssolitaireclassic.jpg",
    "url": "https://play.famobi.com/tri-peaks-solitaire-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sheep039sadventure",
    "title": "Sheep&#039;s Adventure",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Sheep&#039;s Adventure online for free on Fun Play!",
    "thumb": "ats/thumbs/sheep039sadventure.jpg",
    "url": "https://play.famobi.com/sheeps-adventure/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "checkersclassic",
    "title": "Checkers Classic",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Checkers Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/checkersclassic.jpg",
    "url": "https://play.famobi.com/checkers-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "rivalrush",
    "title": "Rival Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Rival Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/rivalrush.jpg",
    "url": "https://play.famobi.com/rival-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "secretbff",
    "title": "Secret BFF",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Secret BFF online for free on Fun Play!",
    "thumb": "ats/thumbs/secretbff.jpg",
    "url": "https://play.famobi.com/secret-bff/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "catfashiondesigner",
    "title": "Cat Fashion Designer",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Cat Fashion Designer online for free on Fun Play!",
    "thumb": "ats/thumbs/catfashiondesigner.jpg",
    "url": "https://play.famobi.com/cat-fashion-designer/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "towerrush",
    "title": "Tower Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Tower Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/towerrush.jpg",
    "url": "https://play.famobi.com/tower-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "backgammonclassic",
    "title": "Backgammon Classic",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Backgammon Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/backgammonclassic.jpg",
    "url": "https://play.famobi.com/backgammon-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "hexpuzzle",
    "title": "Hex Puzzle",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Hex Puzzle online for free on Fun Play!",
    "thumb": "ats/thumbs/hexpuzzle.jpg",
    "url": "https://play.famobi.com/hex-puzzle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pipemania",
    "title": "Pipe Mania",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Pipe Mania online for free on Fun Play!",
    "thumb": "ats/thumbs/pipemania.jpg",
    "url": "https://play.famobi.com/pipe-mania/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bubblespirit",
    "title": "Bubble Spirit",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Bubble Spirit online for free on Fun Play!",
    "thumb": "ats/thumbs/bubblespirit.jpg",
    "url": "https://play.famobi.com/bubble-spirit/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "shards",
    "title": "Shards",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Shards online for free on Fun Play!",
    "thumb": "ats/thumbs/shards.jpg",
    "url": "https://play.famobi.com/shards/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mahjongclassic",
    "title": "Mahjong Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Mahjong Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/mahjongclassic.jpg",
    "url": "https://play.famobi.com/mahjong-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kidspuzzlesea",
    "title": "Kids Puzzle Sea",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Kids Puzzle Sea online for free on Fun Play!",
    "thumb": "ats/thumbs/kidspuzzlesea.jpg",
    "url": "https://play.famobi.com/kids-puzzle-sea/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kittybubbles",
    "title": "Kitty Bubbles",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Kitty Bubbles online for free on Fun Play!",
    "thumb": "ats/thumbs/kittybubbles.jpg",
    "url": "https://play.famobi.com/kitty-bubbles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "doctorteeth",
    "title": "Doctor Teeth",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Doctor Teeth online for free on Fun Play!",
    "thumb": "ats/thumbs/doctorteeth.jpg",
    "url": "https://play.famobi.com/doctor-teeth/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kibaampkumbatritowerssolitaire",
    "title": "Kiba &amp; Kumba: Tri Towers Solitaire",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "210K",
    "desc": "Play Kiba &amp; Kumba: Tri Towers Solitaire online for free on Fun Play!",
    "thumb": "ats/thumbs/kibaampkumbatritowerssolitaire.jpg",
    "url": "https://play.famobi.com/kiba-kumba-tri-towers-solitaire/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "geoquizeurope",
    "title": "Geo Quiz - Europe",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Geo Quiz - Europe online for free on Fun Play!",
    "thumb": "ats/thumbs/geoquizeurope.jpg",
    "url": "https://play.famobi.com/geo-quiz-europe/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kibaampkumbajigsawpuzzle",
    "title": "Kiba &amp; Kumba Jigsaw Puzzle",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "108K",
    "desc": "Play Kiba &amp; Kumba Jigsaw Puzzle online for free on Fun Play!",
    "thumb": "ats/thumbs/kibaampkumbajigsawpuzzle.jpg",
    "url": "https://play.famobi.com/kiba-kumba-jigsaw-puzzle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "seabubbleshooter",
    "title": "Sea Bubble Shooter",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Sea Bubble Shooter online for free on Fun Play!",
    "thumb": "ats/thumbs/seabubbleshooter.jpg",
    "url": "https://play.famobi.com/sea-bubble-shooter/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "froyobar",
    "title": "FroYo Bar",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play FroYo Bar online for free on Fun Play!",
    "thumb": "ats/thumbs/froyobar.jpg",
    "url": "https://play.famobi.com/froyo-bar/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "carcrossing",
    "title": "Car Crossing",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Car Crossing online for free on Fun Play!",
    "thumb": "ats/thumbs/carcrossing.jpg",
    "url": "https://play.famobi.com/car-crossing/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "spidersolitaireclassic",
    "title": "Spider Solitaire Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "474K",
    "desc": "Play Spider Solitaire Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/spidersolitaireclassic.jpg",
    "url": "https://play.famobi.com/spider-solitaire-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "chessclassic",
    "title": "Chess Classic",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Chess Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/chessclassic.jpg",
    "url": "https://play.famobi.com/chess-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "eurokeeper2016",
    "title": "Euro Keeper 2016",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Euro Keeper 2016 online for free on Fun Play!",
    "thumb": "ats/thumbs/eurokeeper2016.jpg",
    "url": "https://play.famobi.com/euro-keeper-2016/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "match3squared",
    "title": "Match 3 Squared",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Match 3 Squared online for free on Fun Play!",
    "thumb": "ats/thumbs/match3squared.jpg",
    "url": "https://play.famobi.com/match-3-squared/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "grimsymbols",
    "title": "Grim Symbols",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Grim Symbols online for free on Fun Play!",
    "thumb": "ats/thumbs/grimsymbols.jpg",
    "url": "https://play.famobi.com/grim-symbols/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "soccergirl",
    "title": "Soccer Girl",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Soccer Girl online for free on Fun Play!",
    "thumb": "ats/thumbs/soccergirl.jpg",
    "url": "https://play.famobi.com/soccer-girl/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kidstangram",
    "title": "Kids Tangram",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Kids Tangram online for free on Fun Play!",
    "thumb": "ats/thumbs/kidstangram.jpg",
    "url": "https://play.famobi.com/kids-tangram/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "seryrunwaydolly",
    "title": "Sery Runway Dolly",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Sery Runway Dolly online for free on Fun Play!",
    "thumb": "ats/thumbs/seryrunwaydolly.jpg",
    "url": "https://play.famobi.com/sery-runway-dolly/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "summerfiesta",
    "title": "Summer Fiesta",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Summer Fiesta online for free on Fun Play!",
    "thumb": "ats/thumbs/summerfiesta.jpg",
    "url": "https://play.famobi.com/summer-fiesta/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "matchtheanimal",
    "title": "Match The Animal",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Match The Animal online for free on Fun Play!",
    "thumb": "ats/thumbs/matchtheanimal.jpg",
    "url": "https://play.famobi.com/match-the-animal/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kidscolorbook",
    "title": "Kids Color Book",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Kids Color Book online for free on Fun Play!",
    "thumb": "ats/thumbs/kidscolorbook.jpg",
    "url": "https://play.famobi.com/kids-color-book/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "soccerdressup",
    "title": "Soccer Dress Up",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Soccer Dress Up online for free on Fun Play!",
    "thumb": "ats/thumbs/soccerdressup.jpg",
    "url": "https://play.famobi.com/soccer-dress-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "soccerbubbles",
    "title": "Soccer Bubbles",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Soccer Bubbles online for free on Fun Play!",
    "thumb": "ats/thumbs/soccerbubbles.jpg",
    "url": "https://play.famobi.com/soccer-bubbles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "europenalty2016",
    "title": "Euro Penalty 2016",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Euro Penalty 2016 online for free on Fun Play!",
    "thumb": "ats/thumbs/europenalty2016.jpg",
    "url": "https://play.famobi.com/euro-penalty-2016/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "circlerush",
    "title": "Circle Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Circle Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/circlerush.jpg",
    "url": "https://play.famobi.com/circle-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "penaltyshooters2",
    "title": "Penalty Shooters 2",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Penalty Shooters 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/penaltyshooters2.jpg",
    "url": "https://play.famobi.com/penalty-shooters-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cataroundtheworld",
    "title": "Cat Around the World",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Cat Around the World online for free on Fun Play!",
    "thumb": "ats/thumbs/cataroundtheworld.jpg",
    "url": "https://play.famobi.com/cat-around-the-world/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "westernsolitaire",
    "title": "Western Solitaire",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Western Solitaire online for free on Fun Play!",
    "thumb": "ats/thumbs/westernsolitaire.jpg",
    "url": "https://play.famobi.com/western-solitaire/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "eurosoccersprint",
    "title": "Euro Soccer Sprint",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Euro Soccer Sprint online for free on Fun Play!",
    "thumb": "ats/thumbs/eurosoccersprint.jpg",
    "url": "https://play.famobi.com/euro-soccer-sprint/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "get10",
    "title": "Get 10",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "185K",
    "desc": "Play Get 10 online for free on Fun Play!",
    "thumb": "ats/thumbs/get10.jpg",
    "url": "https://play.famobi.com/get-10/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "trisfashionistadolly",
    "title": "Tris Fashionista Dolly",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Tris Fashionista Dolly online for free on Fun Play!",
    "thumb": "ats/thumbs/trisfashionistadolly.jpg",
    "url": "https://play.famobi.com/tris-fashionista-dolly/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "zop",
    "title": "Zop",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "151K",
    "desc": "Play Zop online for free on Fun Play!",
    "thumb": "ats/thumbs/zop.jpg",
    "url": "https://play.famobi.com/zop/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "solitairemaster",
    "title": "Solitaire Master",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Solitaire Master online for free on Fun Play!",
    "thumb": "ats/thumbs/solitairemaster.jpg",
    "url": "https://play.famobi.com/solitaire-master/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "weddinglily2",
    "title": "Wedding Lily 2",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Wedding Lily 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/weddinglily2.jpg",
    "url": "https://play.famobi.com/wedding-lily-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "parkyourcar",
    "title": "Park Your Car",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Park Your Car online for free on Fun Play!",
    "thumb": "ats/thumbs/parkyourcar.jpg",
    "url": "https://play.famobi.com/park-your-car/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bubblegems",
    "title": "Bubble Gems",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Bubble Gems online for free on Fun Play!",
    "thumb": "ats/thumbs/bubblegems.jpg",
    "url": "https://play.famobi.com/bubble-gems/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "blowman",
    "title": "Blowman",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Blowman online for free on Fun Play!",
    "thumb": "ats/thumbs/blowman.jpg",
    "url": "https://play.famobi.com/blowman/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "solitaireclassiceaster",
    "title": "Solitaire Classic Easter",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "474K",
    "desc": "Play Solitaire Classic Easter online for free on Fun Play!",
    "thumb": "ats/thumbs/solitaireclassiceaster.jpg",
    "url": "https://play.famobi.com/solitaire-classic-easter/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bubblesshooter",
    "title": "Bubbles Shooter",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Bubbles Shooter online for free on Fun Play!",
    "thumb": "ats/thumbs/bubblesshooter.jpg",
    "url": "https://play.famobi.com/bubbles-shooter/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "eastercardmatch",
    "title": "Easter Card Match",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Easter Card Match online for free on Fun Play!",
    "thumb": "ats/thumbs/eastercardmatch.jpg",
    "url": "https://play.famobi.com/easter-card-match/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "streetpursuit",
    "title": "Street Pursuit",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Street Pursuit online for free on Fun Play!",
    "thumb": "ats/thumbs/streetpursuit.jpg",
    "url": "https://play.famobi.com/street-pursuit/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "prism",
    "title": "Prism",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "185K",
    "desc": "Play Prism online for free on Fun Play!",
    "thumb": "ats/thumbs/prism.jpg",
    "url": "https://play.famobi.com/prism/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ginrummyclassic",
    "title": "Gin Rummy Classic",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Gin Rummy Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/ginrummyclassic.jpg",
    "url": "https://play.famobi.com/gin-rummy-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "littleshopoftreasures",
    "title": "Little Shop Of Treasures",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "457K",
    "desc": "Play Little Shop Of Treasures online for free on Fun Play!",
    "thumb": "ats/thumbs/littleshopoftreasures.jpg",
    "url": "https://play.famobi.com/little-shop-of-treasures/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "strayknight",
    "title": "Stray Knight",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Stray Knight online for free on Fun Play!",
    "thumb": "ats/thumbs/strayknight.jpg",
    "url": "https://play.famobi.com/stray-knight/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sudokuclassic",
    "title": "Sudoku Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Sudoku Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/sudokuclassic.jpg",
    "url": "https://play.famobi.com/sudoku-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dotsmania",
    "title": "Dots Mania",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Dots Mania online for free on Fun Play!",
    "thumb": "ats/thumbs/dotsmania.jpg",
    "url": "https://play.famobi.com/dots-mania/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "texttwist2",
    "title": "Text Twist 2",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Text Twist 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/texttwist2.jpg",
    "url": "https://play.famobi.com/text-twist-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "zoopinball",
    "title": "Zoo Pinball",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Zoo Pinball online for free on Fun Play!",
    "thumb": "ats/thumbs/zoopinball.jpg",
    "url": "https://play.famobi.com/zoo-pinball/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "aliensattack",
    "title": "Aliens Attack",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Aliens Attack online for free on Fun Play!",
    "thumb": "ats/thumbs/aliensattack.jpg",
    "url": "https://play.famobi.com/aliens-attack/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "outcome",
    "title": "Outcome",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Outcome online for free on Fun Play!",
    "thumb": "ats/thumbs/outcome.jpg",
    "url": "https://play.famobi.com/outcome/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "doggydive",
    "title": "Doggy Dive",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Doggy Dive online for free on Fun Play!",
    "thumb": "ats/thumbs/doggydive.jpg",
    "url": "https://play.famobi.com/doggy-dive/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "trollboxing",
    "title": "Troll Boxing",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Troll Boxing online for free on Fun Play!",
    "thumb": "ats/thumbs/trollboxing.jpg",
    "url": "https://play.famobi.com/troll-boxing/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "goldrush",
    "title": "Gold Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Gold Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/goldrush.jpg",
    "url": "https://play.famobi.com/gold-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "emily039snewbeginning",
    "title": "Emily&#039;s New Beginning",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "457K",
    "desc": "Play Emily&#039;s New Beginning online for free on Fun Play!",
    "thumb": "ats/thumbs/emily039snewbeginning.jpg",
    "url": "https://play.famobi.com/emilys-new-beginning/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "arcadegolfneon",
    "title": "Arcade Golf: NEON",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Arcade Golf: NEON online for free on Fun Play!",
    "thumb": "ats/thumbs/arcadegolfneon.jpg",
    "url": "https://play.famobi.com/arcade-golf-neon/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kidspuzzleadventure",
    "title": "Kids Puzzle Adventure",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Kids Puzzle Adventure online for free on Fun Play!",
    "thumb": "ats/thumbs/kidspuzzleadventure.jpg",
    "url": "https://play.famobi.com/kids-puzzle-adventure/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "minerblock",
    "title": "Miner Block",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Miner Block online for free on Fun Play!",
    "thumb": "ats/thumbs/minerblock.jpg",
    "url": "https://play.famobi.com/miner-block/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "finderscritters",
    "title": "Finders Critters",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Finders Critters online for free on Fun Play!",
    "thumb": "ats/thumbs/finderscritters.jpg",
    "url": "https://play.famobi.com/finders-critters/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "playfulkitty",
    "title": "Playful Kitty",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Playful Kitty online for free on Fun Play!",
    "thumb": "ats/thumbs/playfulkitty.jpg",
    "url": "https://play.famobi.com/playful-kitty/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "crazyfreekick",
    "title": "Crazy Freekick",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Crazy Freekick online for free on Fun Play!",
    "thumb": "ats/thumbs/crazyfreekick.jpg",
    "url": "https://play.famobi.com/crazy-freekick/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "holdmyhandfriend",
    "title": "Hold My Hand, Friend",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Hold My Hand, Friend online for free on Fun Play!",
    "thumb": "ats/thumbs/holdmyhandfriend.jpg",
    "url": "https://play.famobi.com/hold-my-hand-friend/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "solitaireclassic",
    "title": "Solitaire Classic",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Solitaire Classic online for free on Fun Play!",
    "thumb": "ats/thumbs/solitaireclassic.jpg",
    "url": "https://play.famobi.com/solitaire-classic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "yetisensation",
    "title": "Yeti Sensation",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Yeti Sensation online for free on Fun Play!",
    "thumb": "ats/thumbs/yetisensation.jpg",
    "url": "https://play.famobi.com/yeti-sensation/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bubblehamsters",
    "title": "Bubble Hamsters",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Bubble Hamsters online for free on Fun Play!",
    "thumb": "ats/thumbs/bubblehamsters.jpg",
    "url": "https://play.famobi.com/bubble-hamsters/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "flyingschool",
    "title": "Flying School",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Flying School online for free on Fun Play!",
    "thumb": "ats/thumbs/flyingschool.jpg",
    "url": "https://play.famobi.com/flying-school/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "chipfamily",
    "title": "Chip Family",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Chip Family online for free on Fun Play!",
    "thumb": "ats/thumbs/chipfamily.jpg",
    "url": "https://play.famobi.com/chip-family/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mommywashingtoys",
    "title": "Mommy Washing Toys",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Mommy Washing Toys online for free on Fun Play!",
    "thumb": "ats/thumbs/mommywashingtoys.jpg",
    "url": "https://play.famobi.com/mommy-washing-toys/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ancientmahjong",
    "title": "Ancient Mahjong",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Ancient Mahjong online for free on Fun Play!",
    "thumb": "ats/thumbs/ancientmahjong.jpg",
    "url": "https://play.famobi.com/ancient-mahjong/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "multisquare",
    "title": "Multisquare",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Multisquare online for free on Fun Play!",
    "thumb": "ats/thumbs/multisquare.jpg",
    "url": "https://play.famobi.com/multisquare/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "groovyski",
    "title": "Groovy Ski",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Groovy Ski online for free on Fun Play!",
    "thumb": "ats/thumbs/groovyski.jpg",
    "url": "https://play.famobi.com/groovy-ski/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "miniputtholiday",
    "title": "Mini Putt Holiday",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Mini Putt Holiday online for free on Fun Play!",
    "thumb": "ats/thumbs/miniputtholiday.jpg",
    "url": "https://play.famobi.com/mini-putt-holiday/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "streetracefury",
    "title": "StreetRace Fury",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play StreetRace Fury online for free on Fun Play!",
    "thumb": "ats/thumbs/streetracefury.jpg",
    "url": "https://play.famobi.com/streetrace-fury/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "greedyrabbit",
    "title": "Greedy Rabbit",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Greedy Rabbit online for free on Fun Play!",
    "thumb": "ats/thumbs/greedyrabbit.jpg",
    "url": "https://play.famobi.com/greedy-rabbit/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mahjongcollision",
    "title": "Mahjong Collision",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Mahjong Collision online for free on Fun Play!",
    "thumb": "ats/thumbs/mahjongcollision.jpg",
    "url": "https://play.famobi.com/mahjong-collision/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "civilizationswarsmasteredition",
    "title": "Civilizations Wars Master Edition",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.5,
    "plays": "210K",
    "desc": "Play Civilizations Wars Master Edition online for free on Fun Play!",
    "thumb": "ats/thumbs/civilizationswarsmasteredition.jpg",
    "url": "https://play.famobi.com/civilizations-wars-master-edition/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "1212",
    "title": "1212!",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "168K",
    "desc": "Play 1212! online for free on Fun Play!",
    "thumb": "ats/thumbs/1212.jpg",
    "url": "https://play.famobi.com/1212/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "coffeemahjong",
    "title": "Coffee Mahjong",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Coffee Mahjong online for free on Fun Play!",
    "thumb": "ats/thumbs/coffeemahjong.jpg",
    "url": "https://play.famobi.com/coffee-mahjong/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "goldmine",
    "title": "Gold Mine",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Gold Mine online for free on Fun Play!",
    "thumb": "ats/thumbs/goldmine.jpg",
    "url": "https://play.famobi.com/gold-mine/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "snowballchampions",
    "title": "Snowball Champions",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Snowball Champions online for free on Fun Play!",
    "thumb": "ats/thumbs/snowballchampions.jpg",
    "url": "https://play.famobi.com/snowball-champions/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "penguinskip",
    "title": "Penguin Skip",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Penguin Skip online for free on Fun Play!",
    "thumb": "ats/thumbs/penguinskip.jpg",
    "url": "https://play.famobi.com/penguin-skip/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "snowballchristmasworld",
    "title": "Snowball Christmas World",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "474K",
    "desc": "Play Snowball Christmas World online for free on Fun Play!",
    "thumb": "ats/thumbs/snowballchristmasworld.jpg",
    "url": "https://play.famobi.com/snowball-christmas-world/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "stickfreak",
    "title": "Stick Freak",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Stick Freak online for free on Fun Play!",
    "thumb": "ats/thumbs/stickfreak.jpg",
    "url": "https://play.famobi.com/stick-freak/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "smartybubblesxmasedition",
    "title": "Smarty Bubbles X-MAS Edition",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "108K",
    "desc": "Play Smarty Bubbles X-MAS Edition online for free on Fun Play!",
    "thumb": "ats/thumbs/smartybubblesxmasedition.jpg",
    "url": "https://play.famobi.com/smarty-bubbles-x-mas-edition/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fashionistamaldives",
    "title": "Fashionista Maldives",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Fashionista Maldives online for free on Fun Play!",
    "thumb": "ats/thumbs/fashionistamaldives.jpg",
    "url": "https://play.famobi.com/fashionista-maldives/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "winteradventures",
    "title": "Winter Adventures",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Winter Adventures online for free on Fun Play!",
    "thumb": "ats/thumbs/winteradventures.jpg",
    "url": "https://play.famobi.com/winter-adventures/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "piratesofislets",
    "title": "Pirates Of Islets",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Pirates Of Islets online for free on Fun Play!",
    "thumb": "ats/thumbs/piratesofislets.jpg",
    "url": "https://play.famobi.com/pirates-of-islets/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pizzaninja3",
    "title": "Pizza Ninja 3",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Pizza Ninja 3 online for free on Fun Play!",
    "thumb": "ats/thumbs/pizzaninja3.jpg",
    "url": "https://play.famobi.com/pizza-ninja-3/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "basketampball",
    "title": "Basket &amp; Ball",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Basket &amp; Ball online for free on Fun Play!",
    "thumb": "ats/thumbs/basketampball.jpg",
    "url": "https://play.famobi.com/basket-ball/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "1010animals",
    "title": "1010 Animals",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play 1010 Animals online for free on Fun Play!",
    "thumb": "ats/thumbs/1010animals.jpg",
    "url": "https://play.famobi.com/1010-animals/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "swooop",
    "title": "SWOOOP",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play SWOOOP online for free on Fun Play!",
    "thumb": "ats/thumbs/swooop.jpg",
    "url": "https://play.famobi.com/swooop/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "magicmahjong",
    "title": "Magic Mahjong",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Magic Mahjong online for free on Fun Play!",
    "thumb": "ats/thumbs/magicmahjong.jpg",
    "url": "https://play.famobi.com/magic-mahjong/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "orangeranch",
    "title": "Orange Ranch",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Orange Ranch online for free on Fun Play!",
    "thumb": "ats/thumbs/orangeranch.jpg",
    "url": "https://play.famobi.com/orange-ranch/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fairycards",
    "title": "Fairy Cards",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Fairy Cards online for free on Fun Play!",
    "thumb": "ats/thumbs/fairycards.jpg",
    "url": "https://play.famobi.com/fairy-cards/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mahjongmania",
    "title": "Mahjong Mania",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Mahjong Mania online for free on Fun Play!",
    "thumb": "ats/thumbs/mahjongmania.jpg",
    "url": "https://play.famobi.com/mahjong-mania/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tiledquest",
    "title": "Tiled Quest",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Tiled Quest online for free on Fun Play!",
    "thumb": "ats/thumbs/tiledquest.jpg",
    "url": "https://play.famobi.com/tiled-quest/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "chainychisaimedieval",
    "title": "Chainy Chisai Medieval",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Chainy Chisai Medieval online for free on Fun Play!",
    "thumb": "ats/thumbs/chainychisaimedieval.jpg",
    "url": "https://play.famobi.com/chainy-chisai-medieval/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "worldcuppenalty",
    "title": "World Cup Penalty",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play World Cup Penalty online for free on Fun Play!",
    "thumb": "ats/thumbs/worldcuppenalty.jpg",
    "url": "https://play.famobi.com/world-cup-penalty/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ojello",
    "title": "Ojello",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Ojello online for free on Fun Play!",
    "thumb": "ats/thumbs/ojello.jpg",
    "url": "https://play.famobi.com/ojello/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "monsterpet",
    "title": "Monster Pet",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Monster Pet online for free on Fun Play!",
    "thumb": "ats/thumbs/monsterpet.jpg",
    "url": "https://play.famobi.com/monster-pet/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "towermania",
    "title": "Tower Mania",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Tower Mania online for free on Fun Play!",
    "thumb": "ats/thumbs/towermania.jpg",
    "url": "https://play.famobi.com/tower-mania/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jewelbubbles3",
    "title": "Jewel Bubbles 3",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Jewel Bubbles 3 online for free on Fun Play!",
    "thumb": "ats/thumbs/jewelbubbles3.jpg",
    "url": "https://play.famobi.com/jewel-bubbles-3/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fruitacrush",
    "title": "Fruita Crush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Fruita Crush online for free on Fun Play!",
    "thumb": "ats/thumbs/fruitacrush.jpg",
    "url": "https://play.famobi.com/fruita-crush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mylittledragon",
    "title": "My Little Dragon",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play My Little Dragon online for free on Fun Play!",
    "thumb": "ats/thumbs/mylittledragon.jpg",
    "url": "https://play.famobi.com/my-little-dragon/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "timberguy",
    "title": "Timber Guy",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Timber Guy online for free on Fun Play!",
    "thumb": "ats/thumbs/timberguy.jpg",
    "url": "https://play.famobi.com/timber-guy/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "clockworkbeetles",
    "title": "Clockwork Beetles",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Clockwork Beetles online for free on Fun Play!",
    "thumb": "ats/thumbs/clockworkbeetles.jpg",
    "url": "https://play.famobi.com/clockwork-beetles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fruitbreak",
    "title": "Fruit Break",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Fruit Break online for free on Fun Play!",
    "thumb": "ats/thumbs/fruitbreak.jpg",
    "url": "https://play.famobi.com/fruit-break/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "hopdon039tstop",
    "title": "Hop Don&#039;t Stop",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Hop Don&#039;t Stop online for free on Fun Play!",
    "thumb": "ats/thumbs/hopdon039tstop.jpg",
    "url": "https://play.famobi.com/hop-dont-stop/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tabbyisland",
    "title": "Tabby Island",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Tabby Island online for free on Fun Play!",
    "thumb": "ats/thumbs/tabbyisland.jpg",
    "url": "https://play.famobi.com/tabby-island/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ultimateboxing",
    "title": "Ultimate Boxing",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Ultimate Boxing online for free on Fun Play!",
    "thumb": "ats/thumbs/ultimateboxing.jpg",
    "url": "https://play.famobi.com/ultimate-boxing/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fastfoodtakeaway",
    "title": "Fast Food Takeaway",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Fast Food Takeaway online for free on Fun Play!",
    "thumb": "ats/thumbs/fastfoodtakeaway.jpg",
    "url": "https://play.famobi.com/fast-food-takeaway/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "treasurehunt",
    "title": "Treasure Hunt",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Treasure Hunt online for free on Fun Play!",
    "thumb": "ats/thumbs/treasurehunt.jpg",
    "url": "https://play.famobi.com/treasure-hunt/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "hiddentasticmansion",
    "title": "Hiddentastic Mansion",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Hiddentastic Mansion online for free on Fun Play!",
    "thumb": "ats/thumbs/hiddentasticmansion.jpg",
    "url": "https://play.famobi.com/hiddentastic-mansion/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "juicydash",
    "title": "Juicy Dash",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Juicy Dash online for free on Fun Play!",
    "thumb": "ats/thumbs/juicydash.jpg",
    "url": "https://play.famobi.com/juicy-dash/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "animalquiz",
    "title": "Animal Quiz",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Animal Quiz online for free on Fun Play!",
    "thumb": "ats/thumbs/animalquiz.jpg",
    "url": "https://play.famobi.com/animal-quiz/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fashionyo",
    "title": "Fashion Yo!!",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Fashion Yo!! online for free on Fun Play!",
    "thumb": "ats/thumbs/fashionyo.jpg",
    "url": "https://play.famobi.com/fashion-yo/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "snowballworld",
    "title": "Snowball World",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Snowball World online for free on Fun Play!",
    "thumb": "ats/thumbs/snowballworld.jpg",
    "url": "https://play.famobi.com/snowball-world/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cutie039skittyrescue",
    "title": "Cutie&#039;s Kitty Rescue",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Cutie&#039;s Kitty Rescue online for free on Fun Play!",
    "thumb": "ats/thumbs/cutie039skittyrescue.jpg",
    "url": "https://play.famobi.com/cuties-kitty-rescue/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "lectro",
    "title": "Lectro",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Lectro online for free on Fun Play!",
    "thumb": "ats/thumbs/lectro.jpg",
    "url": "https://play.famobi.com/lectro/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "amazingme",
    "title": "Amazing Me",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Amazing Me online for free on Fun Play!",
    "thumb": "ats/thumbs/amazingme.jpg",
    "url": "https://play.famobi.com/amazing-me/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "keyampshield",
    "title": "Key &amp; Shield",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Key &amp; Shield online for free on Fun Play!",
    "thumb": "ats/thumbs/keyampshield.jpg",
    "url": "https://play.famobi.com/key-shield/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "taptasticmonsters",
    "title": "Taptastic Monsters",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Taptastic Monsters online for free on Fun Play!",
    "thumb": "ats/thumbs/taptasticmonsters.jpg",
    "url": "https://play.famobi.com/taptastic-monsters/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "creamyice",
    "title": "Creamy Ice",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Creamy Ice online for free on Fun Play!",
    "thumb": "ats/thumbs/creamyice.jpg",
    "url": "https://play.famobi.com/creamy-ice/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cutit",
    "title": "Cut It!",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "185K",
    "desc": "Play Cut It! online for free on Fun Play!",
    "thumb": "ats/thumbs/cutit.jpg",
    "url": "https://play.famobi.com/cut-it/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sushininjadash",
    "title": "Sushi Ninja Dash",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Sushi Ninja Dash online for free on Fun Play!",
    "thumb": "ats/thumbs/sushininjadash.jpg",
    "url": "https://play.famobi.com/sushi-ninja-dash/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fluffyegg",
    "title": "Fluffy Egg",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Fluffy Egg online for free on Fun Play!",
    "thumb": "ats/thumbs/fluffyegg.jpg",
    "url": "https://play.famobi.com/fluffy-egg/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "purplemole",
    "title": "Purple Mole",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Purple Mole online for free on Fun Play!",
    "thumb": "ats/thumbs/purplemole.jpg",
    "url": "https://play.famobi.com/purple-mole/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "paperplaneflight",
    "title": "Paper Plane Flight",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Paper Plane Flight online for free on Fun Play!",
    "thumb": "ats/thumbs/paperplaneflight.jpg",
    "url": "https://play.famobi.com/paper-plane-flight/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mypuppy",
    "title": "My Puppy",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play My Puppy online for free on Fun Play!",
    "thumb": "ats/thumbs/mypuppy.jpg",
    "url": "https://play.famobi.com/my-puppy/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "streetballstar",
    "title": "Street Ball Star",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Street Ball Star online for free on Fun Play!",
    "thumb": "ats/thumbs/streetballstar.jpg",
    "url": "https://play.famobi.com/street-ball-star/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "rainforesthunter",
    "title": "Rain Forest Hunter",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Rain Forest Hunter online for free on Fun Play!",
    "thumb": "ats/thumbs/rainforesthunter.jpg",
    "url": "https://play.famobi.com/rain-forest-hunter/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bravebullpirates",
    "title": "Bravebull Pirates",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Bravebull Pirates online for free on Fun Play!",
    "thumb": "ats/thumbs/bravebullpirates.jpg",
    "url": "https://play.famobi.com/bravebull-pirates/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wanderlust",
    "title": "Wanderlust",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Wanderlust online for free on Fun Play!",
    "thumb": "ats/thumbs/wanderlust.jpg",
    "url": "https://play.famobi.com/wanderlust/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "medievallife",
    "title": "Medieval Life",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Medieval Life online for free on Fun Play!",
    "thumb": "ats/thumbs/medievallife.jpg",
    "url": "https://play.famobi.com/medieval-life/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bosslevelshootout",
    "title": "Boss Level Shootout",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Boss Level Shootout online for free on Fun Play!",
    "thumb": "ats/thumbs/bosslevelshootout.jpg",
    "url": "https://play.famobi.com/boss-level-shootout/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "woodventure",
    "title": "Woodventure",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Woodventure online for free on Fun Play!",
    "thumb": "ats/thumbs/woodventure.jpg",
    "url": "https://play.famobi.com/woodventure/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "orangebubbles",
    "title": "Orange Bubbles",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Orange Bubbles online for free on Fun Play!",
    "thumb": "ats/thumbs/orangebubbles.jpg",
    "url": "https://play.famobi.com/orange-bubbles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "treasurelink",
    "title": "Treasure Link",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Treasure Link online for free on Fun Play!",
    "thumb": "ats/thumbs/treasurelink.jpg",
    "url": "https://play.famobi.com/treasure-link/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "babel",
    "title": "Babel",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "185K",
    "desc": "Play Babel online for free on Fun Play!",
    "thumb": "ats/thumbs/babel.jpg",
    "url": "https://play.famobi.com/babel/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bluebox",
    "title": "Blue Box",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Blue Box online for free on Fun Play!",
    "thumb": "ats/thumbs/bluebox.jpg",
    "url": "https://play.famobi.com/blue-box/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mixedworld",
    "title": "Mixed World",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Mixed World online for free on Fun Play!",
    "thumb": "ats/thumbs/mixedworld.jpg",
    "url": "https://play.famobi.com/mixed-world/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "soccertastic",
    "title": "Soccertastic",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Soccertastic online for free on Fun Play!",
    "thumb": "ats/thumbs/soccertastic.jpg",
    "url": "https://play.famobi.com/soccertastic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bananamania",
    "title": "Bananamania",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Bananamania online for free on Fun Play!",
    "thumb": "ats/thumbs/bananamania.jpg",
    "url": "https://play.famobi.com/bananamania/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ultimatesudoku",
    "title": "Ultimate Sudoku",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Ultimate Sudoku online for free on Fun Play!",
    "thumb": "ats/thumbs/ultimatesudoku.jpg",
    "url": "https://play.famobi.com/ultimate-sudoku/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "miniracerush",
    "title": "Mini Race Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Mini Race Rush online for free on Fun Play!",
    "thumb": "ats/thumbs/miniracerush.jpg",
    "url": "https://play.famobi.com/mini-race-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "burgermaker",
    "title": "Burger Maker",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Burger Maker online for free on Fun Play!",
    "thumb": "ats/thumbs/burgermaker.jpg",
    "url": "https://play.famobi.com/burger-maker/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "firetruck",
    "title": "Fire Truck",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Fire Truck online for free on Fun Play!",
    "thumb": "ats/thumbs/firetruck.jpg",
    "url": "https://play.famobi.com/fire-truck/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "monstersnacktime",
    "title": "Monster Snack Time",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Monster Snack Time online for free on Fun Play!",
    "thumb": "ats/thumbs/monstersnacktime.jpg",
    "url": "https://play.famobi.com/monster-snack-time/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "howtofeedanimals",
    "title": "How To Feed Animals",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play How To Feed Animals online for free on Fun Play!",
    "thumb": "ats/thumbs/howtofeedanimals.jpg",
    "url": "https://play.famobi.com/how-to-feed-animals/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kibaampkumbapuzzle",
    "title": "Kiba &amp; Kumba Puzzle",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Kiba &amp; Kumba Puzzle online for free on Fun Play!",
    "thumb": "ats/thumbs/kibaampkumbapuzzle.jpg",
    "url": "https://play.famobi.com/kiba-kumba-puzzle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "powermahjongthetower",
    "title": "Power Mahjong: The Tower",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Power Mahjong: The Tower online for free on Fun Play!",
    "thumb": "ats/thumbs/powermahjongthetower.jpg",
    "url": "https://play.famobi.com/power-mahjong-the-tower/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "powermahjongthejourney",
    "title": "Power Mahjong: The Journey",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "474K",
    "desc": "Play Power Mahjong: The Journey online for free on Fun Play!",
    "thumb": "ats/thumbs/powermahjongthejourney.jpg",
    "url": "https://play.famobi.com/power-mahjong-the-journey/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "princessgoldbladeandthedangerouswater",
    "title": "Princess Goldblade And The Dangerous Water",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "329K",
    "desc": "Play Princess Goldblade And The Dangerous Water online for free on Fun Play!",
    "thumb": "ats/thumbs/princessgoldbladeandthedangerouswater.jpg",
    "url": "https://play.famobi.com/princess-goldblade-and-the-dangerous-water/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "zombieseatmystocking",
    "title": "Zombies Eat My Stocking",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Zombies Eat My Stocking online for free on Fun Play!",
    "thumb": "ats/thumbs/zombieseatmystocking.jpg",
    "url": "https://play.famobi.com/zombies-eat-my-stocking/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "homerunchampion",
    "title": "Home Run Champion",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Home Run Champion online for free on Fun Play!",
    "thumb": "ats/thumbs/homerunchampion.jpg",
    "url": "https://play.famobi.com/home-run-champion/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "superloomdragonscale",
    "title": "Super Loom: Dragonscale",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Super Loom: Dragonscale online for free on Fun Play!",
    "thumb": "ats/thumbs/superloomdragonscale.jpg",
    "url": "https://play.famobi.com/super-loom-dragonscale/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "angrynecromancer",
    "title": "Angry Necromancer",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Angry Necromancer online for free on Fun Play!",
    "thumb": "ats/thumbs/angrynecromancer.jpg",
    "url": "https://play.famobi.com/angry-necromancer/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tikitakarun",
    "title": "Tiki Taka Run",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Tiki Taka Run online for free on Fun Play!",
    "thumb": "ats/thumbs/tikitakarun.jpg",
    "url": "https://play.famobi.com/tiki-taka-run/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "slackingcafeteria",
    "title": "Slacking Cafeteria",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Slacking Cafeteria online for free on Fun Play!",
    "thumb": "ats/thumbs/slackingcafeteria.jpg",
    "url": "https://play.famobi.com/slacking-cafeteria/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "goalchampion",
    "title": "Goal Champion",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Goal Champion online for free on Fun Play!",
    "thumb": "ats/thumbs/goalchampion.jpg",
    "url": "https://play.famobi.com/goal-champion/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fruitaswipe2",
    "title": "Fruita Swipe 2",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Fruita Swipe 2 online for free on Fun Play!",
    "thumb": "ats/thumbs/fruitaswipe2.jpg",
    "url": "https://play.famobi.com/fruita-swipe-2/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "spect",
    "title": "Spect",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "185K",
    "desc": "Play Spect online for free on Fun Play!",
    "thumb": "ats/thumbs/spect.jpg",
    "url": "https://play.famobi.com/spect/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "123puzzle",
    "title": "123 Puzzle",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play 123 Puzzle online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/123PuzzleTeaser.jpg",
    "url": "https://play.famobi.com/123-puzzle/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "superloomstarburst",
    "title": "Super Loom: Starburst",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Super Loom: Starburst online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SuperLoomStarburstTeaser.jpg",
    "url": "https://play.famobi.com/super-loom-starburst/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "spidersolitaire",
    "title": "Spider Solitaire",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Spider Solitaire online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SpiderSolitaireTeaser.jpg",
    "url": "https://play.famobi.com/spider-solitaire/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "heavenlysweetdonuts",
    "title": "Heavenly Sweet Donuts",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Heavenly Sweet Donuts online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/HeavenlySweetDonutsTeaser.jpg",
    "url": "https://play.famobi.com/heavenly-sweet-donuts/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pocketrpg",
    "title": "Pocket RPG",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Pocket RPG online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/PocketRPGTeaser.jpg",
    "url": "https://play.famobi.com/pocket-rpg/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "slackinggym",
    "title": "Slacking Gym",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Slacking Gym online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SlackingGymTeaser.jpg",
    "url": "https://play.famobi.com/slacking-gym/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "rainbowstarpinball",
    "title": "Rainbow Star Pinball",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Rainbow Star Pinball online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/RainbowStarPinballTeaser.jpg",
    "url": "https://play.famobi.com/rainbow-star-pinball/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "knightower",
    "title": "Knightower",
    "category": "action",
    "badge": "ACTION",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Knightower online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KnightowerTeaser.jpg",
    "url": "https://play.famobi.com/knightower/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "slackinglibrary",
    "title": "Slacking Library",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Slacking Library online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SlackingLibraryTeaser.jpg",
    "url": "https://play.famobi.com/slacking-library/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "klondikesolitaire",
    "title": "Klondike Solitaire",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Klondike Solitaire online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KlondikeSolitaireTeaser.jpg",
    "url": "https://play.famobi.com/klondike-solitaire/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "rabbitpunch",
    "title": "Rabbit Punch",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Rabbit Punch online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/RabbitPunchTeaser.jpg",
    "url": "https://play.famobi.com/rabbit-punch/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pianosteps",
    "title": "Piano Steps",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Piano Steps online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/PianoStepsTeaser.jpg",
    "url": "https://play.famobi.com/piano-steps/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "officelove",
    "title": "Office Love",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Office Love online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/OfficeLoveTeaser.jpg",
    "url": "https://play.famobi.com/office-love/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "slackingschool",
    "title": "Slacking School",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Slacking School online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SlackingSchoolTeaser.jpg",
    "url": "https://play.famobi.com/slacking-school/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dropme",
    "title": "Drop Me",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Drop Me online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/DropMeTeaser.jpg",
    "url": "https://play.famobi.com/drop-me/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sushirollscookingwithemma",
    "title": "Sushi Rolls - Cooking With Emma",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "125K",
    "desc": "Play Sushi Rolls - Cooking With Emma online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SushiRolls-CookingWithEmmaTeaser.jpg",
    "url": "https://play.famobi.com/sushi-rolls-cooking-with-emma/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "springpanda",
    "title": "Spring Panda",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Spring Panda online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SpringPandaTeaser.jpg",
    "url": "https://play.famobi.com/spring-panda/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "summerlily",
    "title": "Summer Lily",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Summer Lily online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SummerLilyTeaser.jpg",
    "url": "https://play.famobi.com/summer-lily/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "teatreatment",
    "title": "Tea Treatment",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Tea Treatment online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/TeaTreatmentTeaser.jpg",
    "url": "https://play.famobi.com/tea-treatment/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "animalsconnect",
    "title": "Animals Connect",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Animals Connect online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/AnimalsConnectTeaser.jpg",
    "url": "https://play.famobi.com/animals-connect/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "shoppinglily",
    "title": "Shopping Lily",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Shopping Lily online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ShoppingLilyTeaser.jpg",
    "url": "https://play.famobi.com/shopping-lily/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pilotheroes",
    "title": "Pilot Heroes",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Pilot Heroes online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/PilotHeroesTeaser.jpg",
    "url": "https://play.famobi.com/pilot-heroes/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sweetcandies",
    "title": "Sweet Candies",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Sweet Candies online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SweetCandiesTeaser.jpg",
    "url": "https://play.famobi.com/sweet-candies/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "blobsplops",
    "title": "Blobs Plops",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Blobs Plops online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/BlobsPlopsTeaser.jpg",
    "url": "https://play.famobi.com/blobs-plops/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "beautycatsalon",
    "title": "Beauty Cat Salon",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Beauty Cat Salon online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/BeautyCatSalonTeaser.jpg",
    "url": "https://play.famobi.com/beauty-cat-salon/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "petroulette",
    "title": "Pet Roulette",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Pet Roulette online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/PetRouletteTeaser.jpg",
    "url": "https://play.famobi.com/pet-roulette/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "whatdoesyourboyfriendlooklike",
    "title": "What Does Your Boyfriend Look Like?",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "193K",
    "desc": "Play What Does Your Boyfriend Look Like? online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/WhatDoesYourBoyfriendLookLikeTeaser.jpg",
    "url": "https://play.famobi.com/what-does-your-boyfriend-look-like/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "halloweenlily",
    "title": "Halloween Lily",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Halloween Lily online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/HalloweenLilyTeaser.jpg",
    "url": "https://play.famobi.com/halloween-lily/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "easterlily",
    "title": "Easter Lily",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Easter Lily online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/EasterLilyTeaser.jpg",
    "url": "https://play.famobi.com/easter-lily/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "twins",
    "title": "Twins",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "185K",
    "desc": "Play Twins online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/TwinsTeaser.jpg",
    "url": "https://play.famobi.com/twins/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "blockbuster",
    "title": "Block Buster",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Block Buster online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/BlockBusterTeaser.jpg",
    "url": "https://play.famobi.com/block-buster/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "0hn0",
    "title": "0h n0",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "168K",
    "desc": "Play 0h n0 online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/0hN0Teaser.jpg",
    "url": "https://play.famobi.com/0h-n0/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "0hh1",
    "title": "0h h1",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "168K",
    "desc": "Play 0h h1 online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/0hH1Teaser.jpg",
    "url": "https://play.famobi.com/0h-h1/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dragonstrail",
    "title": "Dragons Trail",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Dragons Trail online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/DragonsTrailTeaser.jpg",
    "url": "https://play.famobi.com/dragons-trail/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mangalily",
    "title": "Manga Lily",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Manga Lily online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/MangaLilyTeaser.jpg",
    "url": "https://play.famobi.com/manga-lily/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "protecttheplanet",
    "title": "Protect The Planet",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Protect The Planet online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ProtectThePlanetTeaser.jpg",
    "url": "https://play.famobi.com/protect-the-planet/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "savethedate",
    "title": "Save the Date",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Save the Date online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SaveTheDateTeaser.jpg",
    "url": "https://play.famobi.com/save-the-date/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "weddinglily",
    "title": "Wedding Lily",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Wedding Lily online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/WeddingLilyTeaser.jpg",
    "url": "https://play.famobi.com/wedding-lily/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "shapes",
    "title": "Shapes",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Shapes online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ShapesTeaser.jpg",
    "url": "https://play.famobi.com/shapes/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fastcircles",
    "title": "Fast Circles",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Fast Circles online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FastCirclesTeaser.jpg",
    "url": "https://play.famobi.com/fast-circles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "minimaldots",
    "title": "Minimal Dots",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Minimal Dots online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/MinimalDotsTeaser.jpg",
    "url": "https://play.famobi.com/minimal-dots/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "2cars",
    "title": "2Cars",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "185K",
    "desc": "Play 2Cars online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/2CarsTeaser.jpg",
    "url": "https://play.famobi.com/2cars/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dominoshades",
    "title": "Domino Shades",
    "category": "cards",
    "badge": "CARDS",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Domino Shades online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/DominoShadesTeaser.jpg",
    "url": "https://play.famobi.com/domino-shades/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "roadsafetybloodfree",
    "title": "Road Safety - Blood Free",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Road Safety - Blood Free online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/RoadSafety-BloodFreeTeaser.jpg",
    "url": "https://play.famobi.com/road-safety-blood-free/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "roadsafety",
    "title": "Road Safety",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Road Safety online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/RoadSafetyTeaser.jpg",
    "url": "https://play.famobi.com/road-safety/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "woblox",
    "title": "Woblox",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Woblox online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/WobloxTeaser.jpg",
    "url": "https://play.famobi.com/woblox/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "parkingpassion",
    "title": "Parking Passion",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Parking Passion online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ParkingPassionTeaser.jpg",
    "url": "https://play.famobi.com/parking-passion/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "4x1picturequiz",
    "title": "4x1 Picture Quiz",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play 4x1 Picture Quiz online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/4x1PictureQuizTeaser.jpg",
    "url": "https://play.famobi.com/4x1-picture-quiz/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "timberman",
    "title": "Timberman",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Timberman online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/TimbermanTeaser.jpg",
    "url": "https://play.famobi.com/timberman/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sweetsmonster",
    "title": "Sweets Monster",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Sweets Monster online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SweetsMonsterTeaser.jpg",
    "url": "https://play.famobi.com/sweets-monster/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sheepop",
    "title": "Sheepop",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Sheepop online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SheepopTeaser.jpg",
    "url": "https://play.famobi.com/sheepop/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "don039tcrash",
    "title": "Don&#039;t Crash",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Don&#039;t Crash online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/DonTCrashTeaser.jpg",
    "url": "https://play.famobi.com/dont-crash/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "thegreenmission",
    "title": "The Green Mission",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play The Green Mission online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/TheGreenMissionTeaser.jpg",
    "url": "https://play.famobi.com/the-green-mission/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "hextris",
    "title": "Hextris",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Hextris online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/HextrisTeaser.jpg",
    "url": "https://play.famobi.com/hextris/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "butterflychocolatecakecookingwithemma",
    "title": "Butterfly Chocolate Cake - Cooking with Emma",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "329K",
    "desc": "Play Butterfly Chocolate Cake - Cooking with Emma online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ButterflyChocolateCake-CookingWithEmmaTeaser.jpg",
    "url": "https://play.famobi.com/butterfly-chocolate-cake-cooking-with-emma/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "zucchinispaghettibolognesecookingwithemma",
    "title": "Zucchini Spaghetti Bolognese - Cooking with Emma",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "397K",
    "desc": "Play Zucchini Spaghetti Bolognese - Cooking with Emma online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ZucchiniSpaghettiBolognese-CookingWithEmmaTeaser.jpg",
    "url": "https://play.famobi.com/zucchini-spaghetti-bolognese-cooking-with-emma/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "animalines",
    "title": "Animalines",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Animalines online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/AnimalinesTeaser.jpg",
    "url": "https://play.famobi.com/animalines/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "speedmaniac",
    "title": "Speed Maniac",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Speed Maniac online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SpeedManiacTeaser.jpg",
    "url": "https://play.famobi.com/speed-maniac/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "penalty2014",
    "title": "Penalty 2014",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Penalty 2014 online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/Penalty2014Teaser.jpg",
    "url": "https://play.famobi.com/penalty-2014/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fruitaswipe",
    "title": "Fruita Swipe",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Fruita Swipe online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FruitaSwipeTeaser.jpg",
    "url": "https://play.famobi.com/fruita-swipe/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "katanafruits",
    "title": "Katana Fruits",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Katana Fruits online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KatanaFruitsTeaser.jpg",
    "url": "https://play.famobi.com/katana-fruits/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "turbotastic",
    "title": "Turbotastic",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Turbotastic online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/TurbotasticTeaser.jpg",
    "url": "https://play.famobi.com/turbotastic/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "superloomtriplesingle",
    "title": "Super Loom: Triple Single",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "457K",
    "desc": "Play Super Loom: Triple Single online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SuperLoomTripleSingleTeaser.jpg",
    "url": "https://play.famobi.com/super-loom-triple-single/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "bakedapplescookingwithemma",
    "title": "Baked Apples - Cooking with Emma",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "142K",
    "desc": "Play Baked Apples - Cooking with Emma online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/BakedApples-CookingWithEmmaTeaser.jpg",
    "url": "https://play.famobi.com/baked-apples-cooking-with-emma/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "connectmefactory",
    "title": "Connect me factory",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Connect me factory online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ConnectMeFactoryTeaser.jpg",
    "url": "https://play.famobi.com/connect-me-factory/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "snowsmasher",
    "title": "Snow Smasher",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Snow Smasher online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SnowSmasherTeaser.jpg",
    "url": "https://play.famobi.com/snow-smasher/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cowboysvsmartians",
    "title": "Cowboys vs. Martians",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Cowboys vs. Martians online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/CowboysVsMartiansTeaser.jpg",
    "url": "https://play.famobi.com/cowboys-vs-martians/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "nutrush3snowscramble",
    "title": "Nut Rush 3 - Snow Scramble",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Nut Rush 3 - Snow Scramble online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/NutRush3-SnowScrambleTeaser.jpg",
    "url": "https://play.famobi.com/nut-rush-3-snow-scramble/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "winterlily",
    "title": "Winter Lily",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Winter Lily online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/WinterLilyTeaser.jpg",
    "url": "https://play.famobi.com/winter-lily/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "pizzamargheritacookingwithemma",
    "title": "Pizza Margherita - Cooking with Emma",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "210K",
    "desc": "Play Pizza Margherita - Cooking with Emma online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/PizzaMargherita-CookingWithEmmaTeaser.jpg",
    "url": "https://play.famobi.com/pizza-margherita-cooking-with-emma/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "potatosaladcookingwithemma",
    "title": "Potato Salad - Cooking with Emma",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "142K",
    "desc": "Play Potato Salad - Cooking with Emma online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/PotatoSalad-CookingWithEmmaTeaser.jpg",
    "url": "https://play.famobi.com/potato-salad-cooking-with-emma/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "don039tcrosstheline",
    "title": "Don&#039;t Cross the Line",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Don&#039;t Cross the Line online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/DonTCrossTheLineTeaser.jpg",
    "url": "https://play.famobi.com/dont-cross-the-line/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wakethesanta",
    "title": "Wake the Santa",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Wake the Santa online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/WakeTheSantaTeaser.jpg",
    "url": "https://play.famobi.com/wake-the-santa/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mykitten",
    "title": "My Kitten",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play My Kitten online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/MyKittenTeaser.jpg",
    "url": "https://play.famobi.com/my-kitten/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "sortbird",
    "title": "Sort Bird",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Sort Bird online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SortBirdTeaser.jpg",
    "url": "https://play.famobi.com/sort-bird/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "icecreamplease",
    "title": "Ice-Cream, Please!",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Ice-Cream, Please! online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/Ice-CreamPleaseTeaser.jpg",
    "url": "https://play.famobi.com/ice-cream-please/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cookingsupergirlscupcakes",
    "title": "Cooking Super Girls: Cupcakes",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "125K",
    "desc": "Play Cooking Super Girls: Cupcakes online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/CookingSuperGirlsCupcakesTeaser.jpg",
    "url": "https://play.famobi.com/cooking-super-girls-cupcakes/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "3mice",
    "title": "3 Mice",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "185K",
    "desc": "Play 3 Mice online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/3MiceTeaser.jpg",
    "url": "https://play.famobi.com/3-mice/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "redhead",
    "title": "Red Head",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Red Head online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/RedHeadTeaser.jpg",
    "url": "https://play.famobi.com/red-head/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "burninrubber",
    "title": "Burnin Rubber",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Burnin Rubber online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/BurninRubberTeaser.jpg",
    "url": "https://play.famobi.com/burnin-rubber/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cutesalon",
    "title": "Cute Salon",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Cute Salon online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/CuteSalonTeaser.jpg",
    "url": "https://play.famobi.com/cute-salon/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "koutack",
    "title": "Koutack",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Koutack online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KoutackTeaser.jpg",
    "url": "https://play.famobi.com/koutack/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "footchinko",
    "title": "Foot Chinko",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Foot Chinko online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FootChinkoTeaser.jpg",
    "url": "https://play.famobi.com/foot-chinko/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fitzcolor",
    "title": "Fitz Color",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Fitz Color online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FitzColorTeaser.jpg",
    "url": "https://play.famobi.com/fitz-color/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "speedbilliards",
    "title": "Speed Billiards",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Speed Billiards online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SpeedBilliardsTeaser.jpg",
    "url": "https://play.famobi.com/speed-billiards/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "superloomsfishtail",
    "title": "Super Looms: Fishtail",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Super Looms: Fishtail online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SuperLoomsFishtailTeaser.jpg",
    "url": "https://play.famobi.com/super-looms-fishtail/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "italiantiramisu",
    "title": "Italian Tiramisu",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Italian Tiramisu online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ItalianTiramisuTeaser.jpg",
    "url": "https://play.famobi.com/italian-tiramisu/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "extremekitten",
    "title": "Extreme Kitten",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Extreme Kitten online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ExtremeKittenTeaser.jpg",
    "url": "https://play.famobi.com/extreme-kitten/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "speedclubnitro",
    "title": "Speed Club Nitro",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Speed Club Nitro online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SpeedClubNitroTeaser.jpg",
    "url": "https://play.famobi.com/speed-club-nitro/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "frenchapplepiecookingwithemma",
    "title": "French Apple Pie - Cooking with Emma",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "193K",
    "desc": "Play French Apple Pie - Cooking with Emma online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FrenchApplePie-CookingWithEmmaTeaser.jpg",
    "url": "https://play.famobi.com/french-apple-pie-cooking-with-emma/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "vegetablelasagnacookingwithemma",
    "title": "Vegetable Lasagna - Cooking with Emma",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "227K",
    "desc": "Play Vegetable Lasagna - Cooking with Emma online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/VegetableLasagna-CookingWithEmmaTeaser.jpg",
    "url": "https://play.famobi.com/vegetable-lasagna-cooking-with-emma/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "monsterjong",
    "title": "Monsterjong",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Monsterjong online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/MonsterjongTeaser.jpg",
    "url": "https://play.famobi.com/monsterjong/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "freakingmath",
    "title": "FreakingMath",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play FreakingMath online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FreakingMathTeaser.jpg",
    "url": "https://play.famobi.com/freakingmath/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tinyrifles",
    "title": "Tiny Rifles",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Tiny Rifles online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/TinyRiflesTeaser.jpg",
    "url": "https://play.famobi.com/tiny-rifles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fancydiver",
    "title": "Fancy Diver",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Fancy Diver online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FancyDiverTeaser.jpg",
    "url": "https://play.famobi.com/fancy-diver/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "whatfamouscatareyou",
    "title": "What Famous Cat Are You",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play What Famous Cat Are You online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/WhatFamousCatAreYouTeaser.jpg",
    "url": "https://play.famobi.com/what-famous-cat-are-you/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "tomatoquiche",
    "title": "Tomato Quiche",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Tomato Quiche online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/TomatoQuicheTeaser.jpg",
    "url": "https://play.famobi.com/tomato-quiche/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fairyprincess",
    "title": "Fairy Princess",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Fairy Princess online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FairyPrincessTeaser.jpg",
    "url": "https://play.famobi.com/fairy-princess/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "gardenprincess",
    "title": "Garden Princess",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Garden Princess online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/GardenPrincessTeaser.jpg",
    "url": "https://play.famobi.com/garden-princess/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mywedding",
    "title": "My Wedding",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play My Wedding online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/MyWeddingTeaser.jpg",
    "url": "https://play.famobi.com/my-wedding/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "beachbeauty",
    "title": "Beach Beauty",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Beach Beauty online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/BeachBeautyTeaser.jpg",
    "url": "https://play.famobi.com/beach-beauty/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "roxelanetruemakeup",
    "title": "Roxelane True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Roxelane True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/RoxelaneTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/roxelane-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "rosietruemakeup",
    "title": "Rosie True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Rosie True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/RosieTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/rosie-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "ninatruemakeup",
    "title": "Nina True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Nina True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/NinaTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/nina-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "vanessatruemakeup",
    "title": "Vanessa True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Vanessa True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/VanessaTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/vanessa-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "taylortruemakeup",
    "title": "Taylor True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Taylor True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/TaylorTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/taylor-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "selenatruemakeup",
    "title": "Selena True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Selena True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SelenaTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/selena-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wordguess2heavy",
    "title": "Wordguess 2 Heavy",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Wordguess 2 Heavy online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/Wordguess2HeavyTeaser.jpg",
    "url": "https://play.famobi.com/wordguess-2-heavy/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wordguess2easy",
    "title": "Wordguess 2 Easy",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Wordguess 2 Easy online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/Wordguess2EasyTeaser.jpg",
    "url": "https://play.famobi.com/wordguess-2-easy/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "lanatruemakeup",
    "title": "Lana True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Lana True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/LanaTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/lana-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kristentruemakeup",
    "title": "Kristen True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Kristen True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KristenTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/kristen-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kellytruemakeup",
    "title": "Kelly True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "355K",
    "desc": "Play Kelly True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KellyTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/kelly-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jennifertruemakeup",
    "title": "Jennifer True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Jennifer True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/JenniferTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/jennifer-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "demitruemakeup",
    "title": "Demi True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "338K",
    "desc": "Play Demi True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/DemiTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/demi-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "dakotatruemakeup",
    "title": "Dakota True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Dakota True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/DakotaTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/dakota-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "christinatruemakeup",
    "title": "Christina True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Christina True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ChristinaTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/christina-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "amandatruemakeup",
    "title": "Amanda True Make Up",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "372K",
    "desc": "Play Amanda True Make Up online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/AmandaTrueMakeUpTeaser.jpg",
    "url": "https://play.famobi.com/amanda-true-make-up/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "footballtricksworldcup2014",
    "title": "Football Tricks World Cup 2014",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.6,
    "plays": "142K",
    "desc": "Play Football Tricks World Cup 2014 online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FootballTricksWorldCup2014Teaser.jpg",
    "url": "https://play.famobi.com/football-tricks-world-cup-2014/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cannonsandsoldiers",
    "title": "Cannons and Soldiers",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Cannons and Soldiers online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/CannonsAndSoldiersTeaser.jpg",
    "url": "https://play.famobi.com/cannons-and-soldiers/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "chocolatebiscuits",
    "title": "Chocolate Biscuits",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Chocolate Biscuits online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/ChocolateBiscuitsTeaser.jpg",
    "url": "https://play.famobi.com/chocolate-biscuits/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "basketball",
    "title": "Basketball",
    "category": "sports",
    "badge": "SPORTS",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Basketball online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/BasketballTeaser.jpg",
    "url": "https://play.famobi.com/basketball/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "farminvaders",
    "title": "Farm Invaders",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Farm Invaders online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FarmInvadersTeaser.jpg",
    "url": "https://play.famobi.com/farm-invaders/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "cartoonflight",
    "title": "Cartoon Flight",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Cartoon Flight online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/CartoonFlightTeaser.jpg",
    "url": "https://play.famobi.com/cartoon-flight/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "peanutbuttercookies",
    "title": "Peanut Butter Cookies",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "423K",
    "desc": "Play Peanut Butter Cookies online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/PeanutButterCookiesTeaser.jpg",
    "url": "https://play.famobi.com/peanut-butter-cookies/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "quickquiz",
    "title": "Quick Quiz",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Quick Quiz online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/QuickQuizTeaser.jpg",
    "url": "https://play.famobi.com/quick-quiz/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "wildwestsolitaire",
    "title": "Wild West Solitaire",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Wild West Solitaire online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/WildWestSolitaireTeaser.jpg",
    "url": "https://play.famobi.com/wild-west-solitaire/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "lilymakeover",
    "title": "Lily Makeover",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Lily Makeover online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/LilyMakeoverTeaser.jpg",
    "url": "https://play.famobi.com/lily-makeover/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "poppoprush",
    "title": "Pop Pop Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Pop Pop Rush online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/PopPopRushTeaser.jpg",
    "url": "https://play.famobi.com/pop-pop-rush/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jewelish",
    "title": "Jewelish",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "236K",
    "desc": "Play Jewelish online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/JewelishTeaser.jpg",
    "url": "https://play.famobi.com/jewelish/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "glowlines",
    "title": "Glow Lines",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.9,
    "plays": "253K",
    "desc": "Play Glow Lines online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/GlowLinesTeaser.jpg",
    "url": "https://play.famobi.com/glow-lines/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kibaampkumbashadowrun",
    "title": "Kiba &amp; Kumba: Shadow Run",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "457K",
    "desc": "Play Kiba &amp; Kumba: Shadow Run online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KibaKumbaShadowRunTeaser.jpg",
    "url": "https://play.famobi.com/kiba-kumba-shadow-run/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kumbakarate",
    "title": "Kumba Karate",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.6,
    "plays": "287K",
    "desc": "Play Kumba Karate online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KumbaKarateTeaser.jpg",
    "url": "https://play.famobi.com/kumba-karate/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kibaampkumbahighjump",
    "title": "Kiba &amp; Kumba: High Jump",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Kiba &amp; Kumba: High Jump online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KibaKumbaHighJumpTeaser.jpg",
    "url": "https://play.famobi.com/kiba-kumba-high-jump/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "kibaampkumbajunglechaos",
    "title": "Kiba &amp; Kumba: Jungle Chaos",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "491K",
    "desc": "Play Kiba &amp; Kumba: Jungle Chaos online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/KibaKumbaJungleChaosTeaser.jpg",
    "url": "https://play.famobi.com/kiba-kumba-jungle-chaos/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "stonesofthepharaoh",
    "title": "Stones of the Pharaoh",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "406K",
    "desc": "Play Stones of the Pharaoh online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/StonesOfThePharaohTeaser.jpg",
    "url": "https://play.famobi.com/stones-of-the-pharaoh/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "smartybubbles",
    "title": "Smarty Bubbles",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Smarty Bubbles online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/SmartyBubblesTeaser.jpg",
    "url": "https://play.famobi.com/smarty-bubbles/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "mahjongrelax",
    "title": "Mahjong Relax",
    "category": "puzzle",
    "badge": "PUZZLE",
    "rating": 4.7,
    "plays": "304K",
    "desc": "Play Mahjong Relax online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/MahjongRelaxTeaser.jpg",
    "url": "https://play.famobi.com/mahjong-relax/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "miniputtgemforest",
    "title": "Mini Putt Gem Forest",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Mini Putt Gem Forest online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/MiniPuttGemForestTeaser.jpg",
    "url": "https://play.famobi.com/mini-putt-gem-forest/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "miniputtgemgarden",
    "title": "Mini Putt Gem Garden",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.7,
    "plays": "389K",
    "desc": "Play Mini Putt Gem Garden online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/MiniPuttGemGardenTeaser.jpg",
    "url": "https://play.famobi.com/mini-putt-gem-garden/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "jellycollapse",
    "title": "Jelly Collapse",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.8,
    "plays": "321K",
    "desc": "Play Jelly Collapse online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/JellyCollapseTeaser.jpg",
    "url": "https://play.famobi.com/jelly-collapse/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "fititquick",
    "title": "Fit it quick",
    "category": "arcade",
    "badge": "ARCADE",
    "rating": 4.5,
    "plays": "270K",
    "desc": "Play Fit it quick online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/FitItQuickTeaser.jpg",
    "url": "https://play.famobi.com/fit-it-quick/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "uforun",
    "title": "Ufo Run",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.6,
    "plays": "202K",
    "desc": "Play Ufo Run online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/UfoRunTeaser.jpg",
    "url": "https://play.famobi.com/ufo-run/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "nutrush2summersprint",
    "title": "Nut Rush 2: Summer Sprint",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.5,
    "plays": "440K",
    "desc": "Play Nut Rush 2: Summer Sprint online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/NutRush2SummerSprintTeaser.jpg",
    "url": "https://play.famobi.com/nut-rush-2-summer-sprint/A1000-10",
    "type": "external",
    "adfree": false
  },
  {
    "id": "nutrush",
    "title": "Nut Rush",
    "category": "racing",
    "badge": "RACING",
    "rating": 4.7,
    "plays": "219K",
    "desc": "Play Nut Rush online for free on Fun Play!",
    "thumb": "https://img.cdn.famobi.com/portal/html5games/images/tmp/180/NutRushTeaser.jpg",
    "url": "https://play.famobi.com/nut-rush/A1000-10",
    "type": "external",
    "adfree": false
  }
];

// App State Management
let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'featured';
let favorites = JSON.parse(localStorage.getItem('funplay_favorites') || '[]');
let recentlyPlayed = JSON.parse(localStorage.getItem('funplay_recent') || '[]');
let currentGameObj = null;
let trendingIndex = 0;
let trendingTimer = null;
let trendingSlideCount = 0;

// Pagination: render the grid in batches instead of dumping 650+ cabinet
// cards into the DOM at once. Keeps first paint fast and scrolling smooth
// on lower-end devices. More batches load automatically near the bottom
// of the grid, with a manual button as a fallback/trigger.
const GRID_PAGE_SIZE = 30;
let renderedGameCount = 0;
let loadMoreObserver = null;

// Initialization
document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderGameGrid();
  renderTrendingSlideshow();
  setupEventListeners();
  setupCompactHeaderOnScroll();

  const urlParams = new URLSearchParams(window.location.search);
  const requestedGame = urlParams.get('game');
  if (requestedGame) {
    openGameModal(requestedGame);
  }

  // Pause the trending carousel (and its video) while the tab isn't
  // visible - avoids burning CPU/battery/data in the background.
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopTrendingAutoplay();
      document.querySelectorAll('.trending-slide video.trending-slide-img').forEach(v => v.pause());
    } else if (!document.getElementById('game-modal')?.classList.contains('active')) {
      startTrendingAutoplay();
      updateTrendingPosition();
    }
  });
});

// Shrink the top header (logo/search bar) once the user scrolls down on
// mobile, so it doesn't keep eating a huge chunk of the small screen.
function setupCompactHeaderOnScroll() {
  const topbar = document.querySelector('.topbar');
  if (!topbar) return;

  let ticking = false;
  const applyState = () => {
    topbar.classList.toggle('scrolled', window.scrollY > 40);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(applyState);
      ticking = true;
    }
  }, { passive: true });

  applyState();
}

// Ad-block protection is always on: restricts popups, new tabs, top-level
// navigation hijacks, and ad redirects from embedded games.
function applyIframeSandbox(iframeEl) {
  iframeEl.setAttribute('sandbox', 'allow-scripts allow-same-origin allow-forms allow-pointer-lock allow-downloads allow-orientation-lock');
}

// Render Header Stats
function renderStats() {
  const totalGamesEl = document.getElementById('stat-total-games');
  const favCountEl = document.getElementById('stat-fav-count');
  if (totalGamesEl) totalGamesEl.textContent = GAMES_DATABASE.length;
  if (favCountEl) favCountEl.textContent = favorites.length;
}

// Get Filtered & Sorted Games List
function getFilteredGames() {
  let list = [...GAMES_DATABASE];

  if (currentCategory === 'adfree') {
    list = list.filter(g => g.adfree === true);
  } else if (currentCategory === 'favorites') {
    list = list.filter(g => favorites.includes(g.id));
  } else if (currentCategory === 'recent') {
    list = list.filter(g => recentlyPlayed.includes(g.id));
    list.sort((a, b) => recentlyPlayed.indexOf(a.id) - recentlyPlayed.indexOf(b.id));
  } else if (currentCategory !== 'all') {
    list = list.filter(g => g.category === currentCategory);
  }

  if (searchQuery.trim() !== '') {
    const query = searchQuery.toLowerCase().trim();
    list = list.filter(g => 
      g.title.toLowerCase().includes(query) || 
      g.desc.toLowerCase().includes(query) ||
      g.category.toLowerCase().includes(query) ||
      (g.badge && g.badge.toLowerCase().includes(query))
    );
  }

  if (currentCategory !== 'recent') {
    if (currentSort === 'rating') {
      list.sort((a, b) => b.rating - a.rating);
    } else if (currentSort === 'name') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else if (currentSort === 'plays') {
      list.sort((a, b) => parseInt(b.plays) - parseInt(a.plays));
    }
  }

  return list;
}

// Build the markup for a single cabinet card
function cabinetCardHtml(game) {
  const isFav = favorites.includes(game.id);
  const escapedTitle = escapeJsAttr(game.title);
  const badgeClass = game.adfree ? 'badge-tag adfree-badge' : (game.featured ? 'badge-tag featured-badge' : 'badge-tag');
  const cabinetClass = game.featured ? 'cabinet cabinet-featured' : 'cabinet';
  return `
    <div class="${cabinetClass}" onclick="openGameModal('${game.id}')">
      <div class="cabinet-screen">
        <img src="${game.thumb}" alt="${game.title}" loading="lazy" decoding="async" onerror="handleImgError(this, '${escapedTitle}', '${game.category}')" />
        <span class="${badgeClass}">${game.badge || game.category.toUpperCase()}</span>
        <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); toggleFavorite('${game.id}')" title="Favorite">
          ${isFav ? '♥' : '♡'}
        </button>
      </div>
      <div class="cabinet-body">
        <div class="cabinet-header-line">
          <h3>${game.title}</h3>
          <span class="rating-tag">★ ${game.rating}</span>
        </div>
        <p>${game.desc}</p>
        <span class="play-btn">PLAY ▸</span>
      </div>
    </div>
  `;
}

// Render Games Grid (paginated)
// resetPage=true (default) restarts pagination at the top - used whenever
// the filtered/sorted list itself changes (search, category, sort).
// resetPage=false appends/refreshes without losing scroll position - used
// for things like toggling a favorite while browsing.
function renderGameGrid(resetPage = true) {
  const grid = document.getElementById('games-grid');
  const resultCount = document.getElementById('result-count');
  const emptyState = document.getElementById('empty-state');

  if (!grid) return;

  const games = getFilteredGames();

  if (resultCount) {
    resultCount.textContent = `SHOWING ${games.length} ${games.length === 1 ? 'MACHINE' : 'MACHINES'}`;
  }

  if (games.length === 0) {
    grid.innerHTML = '';
    renderedGameCount = 0;
    updateLoadMoreControl(0);
    if (emptyState) emptyState.style.display = 'block';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';

  if (resetPage) renderedGameCount = 0;

  renderedGameCount = Math.min(Math.max(renderedGameCount, GRID_PAGE_SIZE), games.length);
  const visibleGames = games.slice(0, renderedGameCount);

  grid.innerHTML = visibleGames.map(cabinetCardHtml).join('');

  updateLoadMoreControl(games.length);
}

// Load more games into the grid (appends the next batch)
function loadMoreGames() {
  const games = getFilteredGames();
  if (renderedGameCount >= games.length) return;
  const grid = document.getElementById('games-grid');
  if (!grid) return;

  const nextBatch = games.slice(renderedGameCount, renderedGameCount + GRID_PAGE_SIZE);
  grid.insertAdjacentHTML('beforeend', nextBatch.map(cabinetCardHtml).join(''));
  renderedGameCount += nextBatch.length;

  updateLoadMoreControl(games.length);
}

// Show/hide + wire up the "load more" button, and auto-trigger it via
// IntersectionObserver as the user scrolls near it (infinite-scroll feel
// without ever building more DOM than needed).
function updateLoadMoreControl(totalCount) {
  const wrap = document.getElementById('load-more-wrap');
  if (!wrap) return;

  if (loadMoreObserver) {
    loadMoreObserver.disconnect();
    loadMoreObserver = null;
  }

  if (renderedGameCount >= totalCount) {
    wrap.innerHTML = '';
    return;
  }

  const remaining = totalCount - renderedGameCount;
  wrap.innerHTML = `<button class="load-more-btn" id="load-more-btn">LOAD MORE MACHINES ▾ (${remaining} left)</button>`;

  const btn = document.getElementById('load-more-btn');
  if (!btn) return;

  btn.addEventListener('click', loadMoreGames);

  if ('IntersectionObserver' in window) {
    loadMoreObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) loadMoreGames();
      });
    }, { rootMargin: '600px 0px' });
    loadMoreObserver.observe(btn);
  }
}

// Setup Event Listeners
function setupEventListeners() {
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    let searchDebounceTimer = null;
    searchInput.addEventListener('input', (e) => {
      const value = e.target.value;
      clearTimeout(searchDebounceTimer);
      searchDebounceTimer = setTimeout(() => {
        const wasEmpty = searchQuery.length === 0;
        searchQuery = value;
        renderGameGrid();
        if (wasEmpty && searchQuery.length > 0) {
          document.querySelector('.library-header')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    });
  }

  const catTabs = document.querySelectorAll('.cat-tab-btn');
  catTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      catTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      currentCategory = tab.dataset.category;
      renderGameGrid();
    });
  });

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) {
    sortSelect.addEventListener('change', (e) => {
      currentSort = e.target.value;
      renderGameGrid();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeGameModal();
    }
  });

  const modal = document.getElementById('game-modal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeGameModal();
      }
    });
  }
}

// Open Game Modal (Cabinet Theater Player)
// Trending Now Slideshow (Top 10 by rating, tie-broken by play count)
function parsePlays(str) {
  if (!str) return 0;
  const n = parseFloat(str);
  if (str.toUpperCase().includes('M')) return n * 1000000;
  if (str.toUpperCase().includes('K')) return n * 1000;
  return n || 0;
}

function renderTrendingSlideshow() {
  const track = document.getElementById('trending-track');
  const dotsWrap = document.getElementById('trending-dots');
  if (!track || !dotsWrap) return;

  const trendingGameIds = [
    'gta-vice-city',
    'Minecraft',
    'venge',
    'Traffic Rider',
    'omnomrun',
    'hill climb race',
    'worms zone',
    'DEADSHOT',
    'krunker',
    'slowroads'
  ];

  const top10 = trendingGameIds.map(id => GAMES_DATABASE.find(game => game.id === id)).filter(Boolean);


  trendingSlideCount = top10.length;

  track.innerHTML = top10.map(game => {
    const escapedTitle = escapeJsAttr(game.title);
    const mediaElement = game.trendingVideo
      ? `<video class="trending-slide-img" src="${game.trendingVideo}" muted loop playsinline preload="none" onerror="handleImgError(this, '${escapedTitle}', '${game.category}')"></video>`
      : `<img class="trending-slide-img" src="${game.trendingThumb || game.thumb}" alt="${game.title}" loading="lazy" decoding="async" onerror="handleImgError(this, '${escapedTitle}', '${game.category}')" />`;

    const bgThumb = game.trendingThumb || game.thumb;

    return `
      <div class="trending-slide" onclick="openGameModal('${game.id}')">
        <div class="trending-slide-bg" style="background-image:url('${bgThumb}')"></div>
        <div class="trending-slide-scrim"></div>
        ${mediaElement}
        <div class="trending-slide-info">
          <span class="trending-slide-badge">${game.badge || game.category.toUpperCase()}</span>
          <h3>${game.title}</h3>
          <div class="trending-slide-meta">★ ${game.rating} &nbsp;·&nbsp; ${game.plays} PLAYS</div>
          <button class="trending-play-btn" onclick="event.stopPropagation(); openGameModal('${game.id}')">PLAY NOW ▸</button>
        </div>
      </div>
    `;
  }).join('');

  dotsWrap.innerHTML = top10.map((_, i) =>
    `<button class="trending-dot${i === 0 ? ' active' : ''}" onclick="goToTrendingSlide(${i})" aria-label="Slide ${i + 1}"></button>`
  ).join('');

  trendingIndex = 0;
  updateTrendingPosition();
  startTrendingAutoplay();

  const viewport = document.getElementById('trending-viewport');
  if (viewport) {
    viewport.addEventListener('mouseenter', stopTrendingAutoplay);
    viewport.addEventListener('mouseleave', startTrendingAutoplay);
    setupTrendingSwipe(viewport);
  }

  const prevBtn = document.getElementById('trending-prev');
  const nextBtn = document.getElementById('trending-next');
  if (prevBtn) prevBtn.onclick = () => { goToTrendingSlide(trendingIndex - 1); startTrendingAutoplay(); };
  if (nextBtn) nextBtn.onclick = () => { goToTrendingSlide(trendingIndex + 1); startTrendingAutoplay(); };
}

// Touch swipe support for the trending carousel (mobile/touch devices)
function setupTrendingSwipe(viewport) {
  if (viewport.dataset.swipeReady) return; // avoid double-binding
  viewport.dataset.swipeReady = '1';

  let startX = 0;
  let startY = 0;
  let tracking = false;

  viewport.addEventListener('touchstart', (e) => {
    if (!e.touches || !e.touches.length) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    tracking = true;
    stopTrendingAutoplay();
  }, { passive: true });

  viewport.addEventListener('touchend', (e) => {
    if (!tracking) return;
    tracking = false;
    const touch = e.changedTouches && e.changedTouches[0];
    if (touch) {
      const dx = touch.clientX - startX;
      const dy = touch.clientY - startY;
      // Horizontal swipe of at least 40px, and more horizontal than vertical
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) {
        if (dx < 0) goToTrendingSlide(trendingIndex + 1);
        else goToTrendingSlide(trendingIndex - 1);
      }
    }
    startTrendingAutoplay();
  });

  viewport.addEventListener('touchcancel', () => {
    tracking = false;
    startTrendingAutoplay();
  });
}

function updateTrendingPosition() {
  const track = document.getElementById('trending-track');
  if (!track) return;
  track.style.transform = `translateX(-${trendingIndex * 100}%)`;

  document.querySelectorAll('.trending-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === trendingIndex);
  });

  // Only the visible slide's video should be downloading/playing - keeps
  // data usage and CPU/battery load down on mobile & low-end devices.
  document.querySelectorAll('.trending-slide').forEach((slide, i) => {
    const video = slide.querySelector('video.trending-slide-img');
    if (!video) return;
    if (i === trendingIndex) {
      if (video.preload !== 'auto') video.preload = 'auto';
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  });
}

function goToTrendingSlide(i) {
  if (trendingSlideCount === 0) return;
  trendingIndex = ((i % trendingSlideCount) + trendingSlideCount) % trendingSlideCount;
  updateTrendingPosition();
}

function startTrendingAutoplay() {
  stopTrendingAutoplay();
  trendingTimer = setInterval(() => goToTrendingSlide(trendingIndex + 1), 4500);
}

function stopTrendingAutoplay() {
  if (trendingTimer) clearInterval(trendingTimer);
}

function openGameModal(gameId) {
  const game = GAMES_DATABASE.find(g => g.id === gameId);
  if (!game) return;

  currentGameObj = game;

  recentlyPlayed = [gameId, ...recentlyPlayed.filter(id => id !== gameId)].slice(0, 20);
  localStorage.setItem('funplay_recent', JSON.stringify(recentlyPlayed));

  const modal = document.getElementById('game-modal');
  const modalTitle = document.getElementById('modal-game-title');
  const modalBadge = document.getElementById('modal-game-badge');
  const modalRating = document.getElementById('modal-game-rating');
  const modalControlsDesc = document.getElementById('modal-controls-desc');
  const gameIframe = document.getElementById('game-iframe');
  const relatedGrid = document.getElementById('modal-related-grid');

  if (!modal || !gameIframe) return;

  if (modalTitle) modalTitle.textContent = game.title.toUpperCase();
  if (modalBadge) {
    modalBadge.textContent = game.badge || game.category.toUpperCase();
    modalBadge.className = game.adfree ? 'badge-tag adfree-badge' : 'badge-tag';
  }
  if (modalRating) modalRating.textContent = `★ ${game.rating} (${game.plays} PLAYS)`;
  if (modalControlsDesc) modalControlsDesc.textContent = game.controls || "Use keyboard or touch controls to play.";

  updateModalFavBtn(gameId);

  // Apply Ad Blocker Sandbox Rules
  applyIframeSandbox(gameIframe);

  gameIframe.src = game.url;

  if (relatedGrid) {
    const related = GAMES_DATABASE.filter(g => g.id !== gameId && (g.category === game.category || g.type === game.type)).slice(0, 4);
    relatedGrid.innerHTML = related.map(rel => {
      const relEscaped = escapeJsAttr(rel.title);
      return `
        <div class="mini-rec-item" onclick="openGameModal('${rel.id}')">
          <img src="${rel.thumb}" alt="${rel.title}" onerror="handleImgError(this, '${relEscaped}', '${rel.category}')" />
          <span>${rel.title}</span>
        </div>
      `;
    }).join('');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';

  // Pause the trending carousel while a game is playing behind the modal
  stopTrendingAutoplay();
  document.querySelectorAll('.trending-slide video.trending-slide-img').forEach(v => v.pause());
}

// Close Game Modal
function closeGameModal() {
  const modal = document.getElementById('game-modal');
  const gameIframe = document.getElementById('game-iframe');

  if (modal) modal.classList.remove('active');
  if (gameIframe) gameIframe.src = 'about:blank';
  document.body.style.overflow = '';

  // Resume the trending carousel now that the game/iframe is gone
  if (!document.hidden) {
    startTrendingAutoplay();
    updateTrendingPosition();
  }
}

// Toggle Favorite Game
function toggleFavorite(gameId) {
  if (favorites.includes(gameId)) {
    favorites = favorites.filter(id => id !== gameId);
  } else {
    favorites.push(gameId);
  }
  localStorage.setItem('funplay_favorites', JSON.stringify(favorites));

  renderStats();
  renderGameGrid(false);
  if (currentGameObj && currentGameObj.id === gameId) {
    updateModalFavBtn(gameId);
  }
}

function updateModalFavBtn(gameId) {
  const modalFavBtn = document.getElementById('modal-fav-btn');
  if (!modalFavBtn) return;
  const isFav = favorites.includes(gameId);
  modalFavBtn.innerHTML = `${isFav ? '♥ SAVED' : '♡ FAV'}`;
  modalFavBtn.classList.toggle('active', isFav);
}

// Fullscreen Toggle
function toggleFullscreen() {
  const iframeContainer = document.getElementById('modal-iframe-container');
  if (!iframeContainer) return;

  if (!document.fullscreenElement) {
    if (iframeContainer.requestFullscreen) {
      iframeContainer.requestFullscreen();
    } else if (iframeContainer.webkitRequestFullscreen) {
      iframeContainer.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// Reload Game
function reloadGameIframe() {
  const gameIframe = document.getElementById('game-iframe');
  if (gameIframe && currentGameObj) {
    applyIframeSandbox(gameIframe);
    gameIframe.src = currentGameObj.url;
  }
}

// Surprise Me Random Game Play
function quickRandomPlay() {
  const randomIndex = Math.floor(Math.random() * GAMES_DATABASE.length);
  const randomGame = GAMES_DATABASE[randomIndex];
  openGameModal(randomGame.id);
}

// Share Game Link
function shareGame() {
  if (!currentGameObj) return;
  const shareUrl = window.location.origin + window.location.pathname + `?game=${currentGameObj.id}`;
  navigator.clipboard.writeText(shareUrl).then(() => {
    alert(`Copied link to ${currentGameObj.title}!`);
  }).catch(() => {
    alert(`Play ${currentGameObj.title} on Fun Play!`);
  });
}
