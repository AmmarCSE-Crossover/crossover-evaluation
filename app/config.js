export const config = {
	port: process.env.PORT || 2000,
	test_port: 2001,

	db: process.env.MONGOLAB_URI || "mongodb://localhost/crossover_evaluation",
	test_db: "mongodb://localhost/crossover_evaluation_test",
    
    tokenSecret: 'super-big-secret-hush!'
}
