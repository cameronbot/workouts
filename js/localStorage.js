angular.factory('Workout', function($resource) {
			var Workout = {
				"program": {
					"name": "P90X",
					"workouts": [
						{
							"name": "Chest & Back",
							"exercises": [
								{ "name": "Standard Push-ups 1", "options": ["reps"] },
								{ "name": "Wide Front Pull-ups 1", "options": ["reps"] },
								{ "name": "Military Push-ups 1", "options": ["reps"] },
								{ "name": "Reverse Grip Chin-ups 1", "options": ["reps"] },
								{ "name": "Wide Fly Push-ups 1", "options": ["reps"] },
								{ "name": "Closed Grip Overhand Pull-ups 1", "options": ["reps"] },
								{ "name": "Decline Push-ups 1", "options": ["reps"] },
								{ "name": "Heavy Pants 1", "options": ["reps", "weight"] },
								{ "name": "Diamond Push-ups 1", "options": ["reps"] },
								{ "name": "Lawnmowers 1", "options": ["reps", "weight"] },
								{ "name": "Dive Bomber Push-ups 1", "options": ["reps"] },
								{ "name": "Back Flys 1", "options": ["reps", "weight"] },
								{ "name": "Wide Front Pull-ups 2", "options": ["reps"] },
								{ "name": "Standard Push-ups 2", "options": ["reps"] },
								{ "name": "Reverse Grip Chin-ups 2", "options": ["reps"] },
								{ "name": "Military Push-ups 2", "options": ["reps"] },
								{ "name": "Closed Grip Overhand Pull-ups 2", "options": ["reps"] },
								{ "name": "Wide Fly Push-ups 2", "options": ["reps"] },
								{ "name": "Heavy Pants 2", "options": ["reps", "weight"] },
								{ "name": "Decline Push-ups 2", "options": ["reps"] },
								{ "name": "Lawnmowers 2", "options": ["reps", "weight"] },
								{ "name": "Diamond Push-ups 2", "options": ["reps"] },
								{ "name": "Back Flys 2", "options": ["reps", "weight"] },
								{ "name": "Dive-bomber Push-ups 2", "options": ["reps"] }
							]
						},
						{
							"name": "Shoulders & Arms",
							"exercises": [
								{ "name": "Alternating Shoulder Presses", "options": ["reps", "weight"] },
								{ "name": "In & Out Bicep Curls", "options": ["reps", "weight"] },
								{ "name": "Two Arm Tricep Kickback", "options": ["reps", "weight"] },
								{ "name": "Alternating Shoulder Presses", "options": ["reps", "weight"] },
								{ "name": "In & Out Bicep Curls", "options": ["reps", "weight"] },
								{ "name": "Two Arm Tricep Kickback", "options": ["reps", "weight"] },
								{ "name": "Deep Swimmer's Presses", "options": ["reps", "weight"] },
								{ "name": "Full Supination Concentration Curls", "options": ["reps", "weight"] },
								{ "name": "Chair Dips", "options": ["reps"] },
								{ "name": "Deep Swimmer's Presses", "options": ["reps", "weight"] },
								{ "name": "Full Supination Concentration Curls", "options": ["reps", "weight"] },
								{ "name": "Chair Dips", "options": ["reps"] },
								{ "name": "Upright Rows", "options": ["reps", "weight"] },
								{ "name": "Static Arm Curls", "options": ["reps", "weight"] },
								{ "name": "Flip-Grip Twist Tricep Kickbacks", "options": ["reps", "weight"] },
								{ "name": "Upright Rows", "options": ["reps", "weight"] },
								{ "name": "Static Arm Curls", "options": ["reps", "weight"] },
								{ "name": "Flip-Grip Twist Tricep Kickbacks", "options": ["reps", "weight"] },
								{ "name": "Seated Two-angle Shoulder Flys", "options": ["reps", "weight"] },
								{ "name": "Crouching Cohen Curls", "options": ["reps", "weight"] },
								{ "name": "Lying Down Tricep Extensions", "options": ["reps", "weight"] },
								{ "name": "In & Out Straight Arm Shoulder Flys", "options": ["reps", "weight"] },
								{ "name": "Congdon Curls", "options": ["reps", "weight"] },
								{ "name": "Side Tri-Rises", "options": ["reps-left", "reps-right"] },
								{ "name": "In & Out Straight-Arm Shoulder Flys", "options": ["reps", "weight"] },
								{ "name": "Congdon Curls", "options": ["reps", "weight"] },
								{ "name": "Side Tri-Rises", "options": ["reps-left", "reps-right"] }
							]
						},
						{
							"name": "Legs & Back",
							"exercises": [
								{ "name": "Balanced Lunges", "options": ["reps-left", "reps-right" ] },
								{ "name": "Calf-raise Squats", "options": ["reps", "weight"] },
								{ "name": "Reverse Grip Chin-ups", "options": ["reps"] },
								{ "name": "Super Skaters", "options": ["reps-right", "reps-left"] },
								{ "name": "Wall Squats", "options": ["time"] },
								{ "name": "Wide Front Pull-ups", "options": ["reps"] },
								{ "name": "Step Back Lunge", "options": ["reps", "weight"] },
								{ "name": "Closed Grip Overhead Pull-ups", "options": ["reps"] },
								{ "name": "Single Leg Wall Squat", "options": ["time"] },
								{ "name": "Deadlift Squats", "options": ["reps-left", "reps-right"] },
								{ "name": "Switch Grip Pull-ups", "options": ["reps"] },
								{ "name": "Three Way Lunge", "options": ["reps-left", "reps-right"] },
								{ "name": "Sneaky Lunge", "options": ["reps"] },
								{ "name": "Reverse Grip Chin-ups", "options": ["reps"] },
								{ "name": "Chair Salutations", "options": ["time"] },
								{ "name": "Toe-roll Iso Lunge", "options": ["reps", "weight"] },
								{ "name": "Wide Front Pull-ups", "options": ["reps"] },
								{ "name": "Groucho Walk", "options": ["time"] },
								{ "name": "Calf Raises", "options": ["reps", "weight"], "todo": "There are three versions of these that could be recorded separately." },
								{ "name": "Closed Grip Overhand Pull-ups", "options": ["reps"] },
								{ "name": "80/20 Siebers-speed Squats", "options": ["reps-right", "reps-left"] },
								{ "name": "Switch Grip Pull-ups", "options": ["reps"] }
							]
						},
						{
							"name": "Chest, Shoulders & Triceps",
							"exercises": [
								{ "name": "Slo-mo 3-in-1 Push-ups", "options": ["reps"] },
								{ "name": "In & Out Sholder Flys", "options": ["reps", "weight"] },
								{ "name": "Chair Dips", "options": ["reps"] },
								{ "name": "Plange Push-ups", "options": ["reps"] },
								{ "name": "Pike Presses", "options": ["reps"] },
								{ "name": "Side Tri-rises", "options": ["reps-left", "reps-right"] },
								{ "name": "Floor Flys", "options": ["reps"] },
								{ "name": "Scarecrows", "options": ["reps", "weight"] },
								{ "name": "Overhead Tricep Extensions", "options": ["reps", "weight"] },
								{ "name": "Two-twitch Speed Push-ups", "options": ["reps"] },
								{ "name": "Y-Presses", "options": ["reps", "weight"] },
								{ "name": "Lying Tricep Extensions", "options": ["reps", "weight"] },
								{ "name": "Side-to-side Push-ups", "options": ["reps"] },
								{ "name": "Pour Flys", "options": ["reps", "weight"] },
								{ "name": "Side Leaning Tricep Extensions", "options": ["reps", "weight"] },
								{ "name": "One-arm Push-ups", "options": ["reps"] },
								{ "name": "Weighted Circles", "options": ["reps", "weight"] },
								{ "name": "Throw the Bomb", "options": ["reps", "weight"] },
								{ "name": "Clap or Plyo Push-ups", "options": ["reps"] },
								{ "name": "Slo-mo Throws", "options": ["reps", "weight"] },
								{ "name": "One-arm Balance Push-ups", "options": ["reps"] },
								{ "name": "Fly-Row-Presses", "options": ["reps", "weight"] },
								{ "name": "Dumbbell Cross-body Blows", "options": ["reps", "weight"] }
							]
						},
						{
							"name": "Back & Biceps",
							"exercises": [
								{ "name": "Wide Front Pull-ups", "options": ["reps"] },
								{ "name": "Lawnmowers", "options": ["reps", "weight"] },
								{ "name": "Twenty-ones", "options": ["reps", "weight"] },
								{ "name": "One-arm Cross-body Curls", "options": ["reps", "weight"] },
								{ "name": "Switch Grip Pull-ups", "options": ["reps"] },
								{ "name": "Elbows-out Lawnmowers", "options": ["reps", "weight"] },
								{ "name": "Standing Bicep Curls", "options": ["reps", "weight"] },
								{ "name": "One-arm Concentration Curls", "options": ["reps", "weight"] },
								{ "name": "Corn Cob Pull-ups", "options": ["reps"] },
								{ "name": "Reverse Grip Bent-over Rows", "options": ["reps", "weight"] },
								{ "name": "Open-arm Curls", "options": ["reps", "weight"] },
								{ "name": "Static-arm Curls", "options": ["reps", "weight"] },
								{ "name": "Towel Pull-ups", "options": ["reps"] },
								{ "name": "Congdon Locomotives", "options": ["reps", "weight"] },
								{ "name": "Crouching Cohen Curls", "options": ["reps", "weight"] },
								{ "name": "One-arm Corkscrew Curls", "options": ["reps", "weight"] },
								{ "name": "Chin-ups", "options": ["reps"] },
								{ "name": "Seated Bent-over Back Flys", "options": ["reps", "weight"] },
								{ "name": "Curl-up/Hamer-downs", "options": ["reps", "weight"] },
								{ "name": "Hammer Curls", "options": ["reps", "weight"] },
								{ "name": "Max Rep Pull-ups", "options": ["reps"] },
								{ "name": "Superman", "options": ["reps"] },
								{ "name": "In-Out Hammer Curls", "options": ["reps", "weight"] },
								{ "name": "Strip Set Curls", "options": ["reps", "weight"], "todo": "There are 4 rounds of these that could be tracked separately." }
							]
						}
					]
				}
			};

			Workout.prototype.list = function() {
				return this.program.workouts;
			};

			return Workout;
		});