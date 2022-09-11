import React from 'react';
import flood from '../components/images/flood.jpg';
import urbanflood from '../components/images/urbanflood.jpg';
import earthquake from '../components/images/earthquake.jpg';
import cyclones from '../components/images/cyclone.jpg';
import heatwave from '../components/images/heatwave.jpg';
import tsunami from '../components/images/tsunami.jpg';


class AfterDisasters extends React.Component {
    render() {
        return <div>
            <h1>What to do after disasters</h1>

            <div class = "floods" id = "floods">
            <h2>Floods</h2>
            <ul class = "list">
                <div class = "imgSpace"><img src = {flood} alt = "Flood" class = "floodpic"></img></div>
                <li class = "flist">Avoid building in flood prone areas unless you elevate and reinforce your home.</li>
                <li class = "flist">Elevate the furnace, water heater, and electric panel if susceptible to flooding.</li>
                <li class = "flist">Install "Check Valves" in sewer traps to prevent floodwater from backing up into the drains of your home.</li>
                <li class = "flist">Contact community officials to find out if they are planning to construct barriers (levees, beams and floodwalls) to stop floodwater from entering the homes in your area.</li>
                <li class = "flist">Seal the walls in your basement with waterproofing compounds to avoid seepage.</li>
            </ul>
            </div>

            <div>
                <p>
                    ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </p>
            </div>

            <div class = "urbanfloods" id = "urbanfloods">
            <h2>Urban Floods</h2>
            <ul>
                <div class = "imgSpace"><img src = {urbanflood} alt = "Urban Flood" class = "urbanfloodspic"></img></div>
                <li class = "uflist">Do not litter waste, plastic bags, plastic bottles in drains</li>
                <li class = "uflist">Try to be at home if high tide and heavy rains occur simultaneously</li>
                <li class = "uflist">Listen to the weather forecast at All India Radio, Doordarshan, as well as messages by Municipal bodies from time to time and act accordingly.</li>
                <li class = "uflist">Evacuate low lying areas and shift to safer places.</li>
                <li class = "uflist">Make sure that each person has a lantern, torch, some edibles, drinking water, dry clothes and necessary documents while evacuating or shifting.</li>
                <li class = "uflist">Make sure that each family member has an identity card.</li>
                <li class = "uflist">Put all valuables at a higher place in the house.</li>
            </ul>
            </div>

            <div>
                <p> 
                ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </p>
            </div>

            <div class = "earthquakes" id = "earthquakes">
            <h2>Earthquakes</h2>
            <ul>
                <div class = "imgSpace"><img src = {earthquake} alt = "Earthquake" class = "earthquakespic"></img></div>
                <li class = "elist">Repair deep plaster cracks in ceilings and foundations. Get expert advice if there are signs of structural defects.</li>
                <li class = "elist">Anchor overhead lighting fixtures to the ceiling.</li>
                <li class = "elist">Follow BIS codes relevant to your area for building standards</li>
                <li class = "elist">Fasten shelves securely to walls.</li>
                <li class = "elist">Place large or heavy objects on lower shelves.</li>
                <li class = "elist">Store breakable items such as bottled foods, glass, and china in low, closed cabinets with latches.</li>
                <li class = "elist">Hang heavy items such as pictures and mirrors away from beds, settees, and anywhere that people sit.</li>
                <li class = "elist">Brace overhead light and fan fixtures.</li>
                <li class = "elist">Repair defective electrical wiring and leaky gas connections. These are potential fire risks.</li>
                <li class = "elist">Secure water heaters, LPG cylinders etc., by strapping them to the walls or bolting to the floor.</li>
                <li class = "elist">Store weed killers, pesticides, and flammable products securely in closed cabinets with latches and on bottom shelves.</li>
                <li class = "elist">Identify safe places indoors and outdoors.
                    <ul>
                        <li class = "elist">Under strong dining table, bed</li>
                        <li class = "elist">Against an inside wall</li>
                        <li class = "elist">Away from where glass could shatter around windows, mirrors, pictures, or where heavy bookcases or other heavy furniture could fall over</li>
                        <li class = "elist">In the open, away from buildings, trees, telephone and electrical lines, flyovers and bridges</li>
                    </ul>
                </li>
                <li class = "elist">Know emergency telephone numbers (such as those of doctors, hospitals, the police, etc)</li>
                <li class = "elist">Educate yourself and family members</li>
                <li class = "elist">PSHA Table at Grid Points</li>
            </ul>
            </div>

            <div>
                <p> 
                ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </p>
            </div>

            <div class = "cyclones" id = "cyclones">
            <h2>Cyclones</h2>
            <ul>
                <div class = "imgSpace"><img src = {cyclones} alt = "Cyclones" class = "cyclonespic"></img></div>
                <li class = "clist">Pack essentials for yourself and your family to last a few days. These should include medicines, special food for babies and children or elders</li>
                <li class = "clist">Head for the proper shelter or evacuation points indicated for your area</li>
                <li class = "clist">Do not worry about your property</li>
                <li class = "clist">At the shelter follow instructions of the person in charge</li>
                <li class = "clist">Remain in the shelter until you are informed to leave</li>
                <li class = "clist">You should remain in the shelter until informed that you can return to your home</li>
                <li class = "clist">You must get inoculated against diseases immediately</li>
                <li class = "clist">Strictly avoid any loose and dangling wires from lamp posts</li>
                <li class = "clist">If you have to drive, do drive carefully</li>
                <li class = "clist">Clear debris from your premises immediately</li>
                <li class = "clist">Report the correct losses to appropriate authorities</li>
            </ul>
            </div>

            <div>
                <p> 
                ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </p>
            </div>

            <div class = "tsunamis" id = "tsunamis">
            <h2>Tsunamis</h2>
            <ul>
                <div><img src = {tsunami} alt = "Tsunami" class = "tsunamispic"></img></div>
                <li class = "tlist">You should find out if your home, school, workplace, or other frequently visited locations are in tsunami hazard areas</li>
                <li class = "tlist">Know the height of your street above sea level and the distance of your street from the coast or other high-risk waters. (Local administration may put sign boards). Also find out the height above sea level and the distance from the coast of outbuildings that house animals, as well as pastures or corrals</li>
                <li class = "tlist">Plan evacuation routes from your home, school, workplace, or any other place you could be where tsunamis present a risk. If possible, pick areas (30 meters) above sea level or go as far as 3 kilometres inland, away from the coastline. If you cannot get this high or far, go as high or far as you can. You should be able to reach your safe location on foot within 15 minutes. Follow posted tsunami evacuation routes; these will lead to safety.</li>
                <li class = "tlist">If your children's school is in an identified inundation zone, find out what the school evacuation plan is. Find out if the plan requires you to pick your children up from school or from another location. Telephone lines during a tsunami watch or warning may be overloaded and routes to and from schools may be jammed.</li>
                <li class = "tlist">Practice your evacuation routes. Familiarity may save your life. Be able to follow your escape route at night and during inclement weather. Practicing your plan makes the appropriate response more of a reaction, requiring less thinking during an actual emergency situation.</li>
                <li class = "tlist">Use a Weather Radio or stay tuned to a local radio or television station to keep informed of local watches and warnings.</li>
                <li class = "tlist">Talk to your insurance agent.Homeowners' policies may not cover flooding from a tsunami. Ask the Insurance Agent about the benefits from Multi-Hazard Insurance Schemes.</li>
                <li class = "tlist">Discuss tsunamis with your family. Everyone should know what to do in a tsunami situation. Discussing tsunamis ahead of time will help reduce fear and save precious time in an emergency. </li>
            </ul>
            </div>

            <div>
                <p> 
                ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                </p>
            </div>

            <div class = "heatwaves" id = "heatwaves">
            <h2>Heat Waves</h2>
            <ul>
                <div class = "imgSpace"><img src = {heatwave} alt = "Heat Wave" class = "heatwavespic"></img></div>
                <li class = "hlist">Avoid going out in the sun, especially between 12:00 P.M and 3:00 P.M</li>
                <li class = "hlist">Drink sufficient water as often as possible</li>
                <li class = "hlist">Wear lightweight, light coloured, loose, and porous cotton clothes</li>
                <li class = "hlist">Use protective goggles, umbrella/hat, shoes or chappals when going outside</li>
                <li class = "hlist">Avoid strenuous activities</li>
                <li class = "hlist">Avoid working outside between 12:00 P.M and 3:00 P.M</li>
                <li class = "hlist">Carry water with you</li>
                <li class = "hlist">Avoid alcohol, tea, coffee and carbonated soft drinks, which dehydrates the body</li>
                <li class = "hlist">Avoid high-protein food and do not eat stale food</li>
                <li class = "hlist">If you work outside, use a hat or an umbrella and also use a damp cloth on your head, neck, face and limbs</li>
                <li class = "hlist">Do not leave children or pets in parked vehicles</li>
                <li class = "hlist">If you feel faint or ill, see a doctor immediately</li>
                <li class = "hlist">Use ORS, homemade drinks like lassi, torani (rice water), lemon water, buttermilk, etc. which helps to rehydrate the body</li>
                <li class = "hlist">Keep animals in shade and give them plenty of water to drink</li>
                <li class = "hlist">Keep your home cool, use curtains, shutters or sunshade and open windows at night</li>
                <li class = "hlist">Use fans, damp clothing and take bath in cold water frequently</li>
            </ul>
            </div>



            </div>;
    }
}

export default AfterDisasters;