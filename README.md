# 🏟️ AegisFlow Assist - PromptWars Submission

An AI-driven, hybrid crowd management assistant designed for everyday crowded environments and large-scale venues.

## 🎯 Chosen Vertical
**Expert Systems Architect and Urban Planner**
Specializing in hybrid crowd management solutions that blend historical wisdom with cutting-edge technology. The persona demands a smart, dynamic assistant that improves physical event experiences by optimizing crowd movement, reducing wait times, and facilitating real-time coordination.

## 🛠️ Approach & Logic
AegisFlow represents a "Hybrid" approach:
1. **The Physical (Historical Baseline):** Utilizing time-tested crowd dynamics—such as the Roman Colosseum's radial dispersal and Pompeii's visual street markers.
2. **The Digital (Modern Assistant):** A smart web-based assistant that acts as a localized control hub for venue staff or urban planners.

**Logic Flow:**
- The assistant evaluates user context (e.g., "I am a staff member at Gate B").
- It simulates crowd density readings and calculates the most efficient dispersal routes.
- It dynamically generates directives (e.g., "Shift the barrier 5 meters right" or "Direct attendees to the blue path").

## 💻 How the Solution Works
This MVP is a lightweight, frontend-driven smart assistant designed specifically for on-ground staff to make rapid decisions:
- **Interactive Assistant Interface:** A clean, glassmorphism chat UI where staff can input queries (e.g., "What is the density at the Food Court?").
- **Dynamic Decision Making:** The app simulates backend AI calculations to provide real-time routing commands.
- **Google Services Integration:** Integrates Google Maps to visually pinpoint exactly where the bottlenecks are occurring in the real world (simulated locations for the MVP).

## 🤔 Assumptions Made
- **Edge Deployment:** In a real-world scenario, this assistant would receive live data from Edge-deployed YOLOv8 IP cameras. For this hackathon, density metrics are simulated.
- **Staff Usage:** The current interface is tailored for staff/security personnel trying to manage on-ground constraints.
- **Offline Reliability:** Being less than 1MB and largely vanilla JS, this UI is designed to load instantly and run efficiently even on poor cellular networks common in crowded arenas.

---
*Developed for Google Antigravity & Hack2Skill PromptWars*
