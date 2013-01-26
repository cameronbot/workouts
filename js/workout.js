angular.module('workout', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/', {controller:ProgramListControl, templateUrl:'tmpl/programs.html'}).
			when('/:programKey', {controller:WorkoutListControl, templateUrl:'tmpl/workouts.html'}).
			when('/:programKey/:workoutId', {controller:WorkoutControl, templateUrl:'tmpl/exercises.html'}).
			when('/:programKey/:workoutId/:exerciseId', {controller:ExerciseControl, templateUrl:'tmpl/exercise.html'}).
			otherwise({redirectTo:'/'});
}).factory("Workout", function($http) {
	
	var Workout = {};

	Workout.load = function(key) {
		this.program = {};
		console.log("Constr key:",key);

		$http.get('js/programs.json').success(function (data) {
			if(data.programs[key]) {
				this.program = data.programs[key];
				this.program.metadata = {};
				this.program.metadata.activeWorkout = 0;
			}

			console.log("constr",this.program.workouts);
		});
	};

	Workout.beginRoutine = function(index) {
		var wk = this.program.workouts[index];

		this.program.metadata.activeWorkout = index;


		if(!wk.activeExercise) {
			wk.activeExercise = 0;
		}
	};

	Workout.log = function(data, index) {
		var md = this.program.metadata,
			wk = this.program.workouts[md.activeWorkout],
			ex = wk.exercises[wk.activeExercise];

		console.log("Workout.log", data);
	
		if(!ex.datalog) {
			ex.datalog = [];
		}

		if(index) {
			ex.datalog[index] = data;
		} else {
			ex.datalog.push(data);
		}

		console.log('new datalog', ex.datalog);

		return this;
		//return this.editLog( md.activeWorkout, wk.activeExercise, data );
	};

	return Workout;
}).factory("Log", function() {
	var Log = {
		"date": new Date().toString()
	};

	return Log;

});

function ProgramListControl($scope, $http) {
	$scope.programs = [];
	$http.get('js/programs.json').success(function (data) {
		for ( var program in data.programs ) {
			console.log(program);
			$scope.programs.push({ "key": program, "name": data.programs[program].name });
		}
	});
	
}
function WorkoutListControl($scope, $routeParams, $http, Workout) {
	var programKey = $routeParams.programKey;

		$scope.routeParams = $routeParams;
		$http.get('js/programs.json').success(function (data) {
			if(data.programs[programKey]) {
				Workout.program = data.programs[programKey];
				Workout.program.metadata = {};
				Workout.program.metadata.activeWorkout = 0;
			}

			console.log("control",Workout.program.workouts);
			$scope.workouts = Workout.program.workouts;
		});
}

function WorkoutControl($scope, $location, $routeParams, Workout) {
	$scope.routeParams = $routeParams;

	$scope.workout = Workout.program.workouts[$routeParams.workoutId].name;
	$scope.exercises = Workout.program.workouts[$routeParams.workoutId].exercises;
	
	Workout.beginRoutine($routeParams.workoutId);
}

function ExerciseControl($scope, $location, $routeParams, Workout) {
	$scope.exercise = Workout.program.workouts[$routeParams.workoutId].exercises[$routeParams.exerciseId];
	$scope.exerciseData = {};
	$scope.exerciseData.data = [];
	$scope.save = function() {
		$scope.exerciseData.date = new Date().toString();
		$scope.exercise = Workout.program.workouts[$routeParams.workoutId].exercises[$routeParams.exerciseId];
		console.log($scope.exerciseData);
		Workout.log($scope.exerciseData);
	};
}