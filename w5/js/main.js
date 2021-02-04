import Hike from "./hikes.js";

const hikeList = [
  hike1 = new Hike("Bechler Falls", 3.0, 'Easy', 'Beautiful short hike along the Bechler river to Bechler Falls', 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.', 'falls.jpg', 'Image of Bechler Falls'),
  hike2 = new Hike("Teton Canyon", 3.0, 'Easy', 'Beautiful short (or long) hike through Teton Canyon.', 'Take Highway 33 East to Driggs. Turn left onto Teton Canyon Road. Follow that road for a few miles then turn right onto Staline Raod for a short distance, then left onto Alta Road. Veer right after Alta back onto Teton Canyon Road. There is a parking area at the trailhead.', 'falls.jpg', 'Image of Teton Falls (fake)'),
  hike3 = new Hike("Denanda Falls", 7.0, 'Moderate', 'Beautiful short hike along the Bechler river to Bechler Falls', 'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.', 'falls.jpg', 'Image of Denanda Falls'),
]

//on load grab the array and insert it into the page
const myHikes = new Hikes("hikes");
window.addEventListener("load", () => {
  myHikes.showHikeList();
});
myHikes.hikeList;
