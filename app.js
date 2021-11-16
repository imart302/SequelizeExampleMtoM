
const models = require('./db/models');



const createTest = async () => {
    try{
        let worker = await models.Worker.create({
            name: "worker1"
        });
        let project = await models.Project.create({
            description: "Project 1"
        });

        console.log(worker);
        console.log(project);
    }
    catch(error){
        console.log(error);
    }
}

const asociateTest = async () => {
    try{
        //watche ID in mysql
        let worker = await models.Worker.findByPk(1);
        console.log(worker);
        worker.setProject(1);
    }
    catch(error){
        console.log(error);
    }
}

const createAndAssociateTest = async () => {
    try{
        let worker = await models.Worker.create({
            name: "worker2"
        });
        let project = await models.Project.create({
            description: "description2"
        });
        worker.setProject(project.id);
    }
    catch(error){
        console.log(error);
    }
}

const workerFetchTest = async () => {
    try{
        let workers = await models.Worker.findAll({
            include: {
                model: models.Project,
                as: {singular: 'Project', plural: 'Projects'}
            }
        });

        console.log(JSON.stringify(workers, null, 2));

    }   
    catch(error){
        console.log(error);
    }
}

const associate2 = async () => {
    try{
        let worker = await models.Worker.findByPk(1);
        console.log(worker);
        worker.addProjects([1, 2]);
    }
    catch(error){
        console.log(error);
    }
};

const removeAssociationTest = async () => {
    try{
        let worker = await models.Worker.findByPk(1);
        worker.removeProjects([1, 2]);
    }   
    catch(error){
        console.log(error);
    }
}

//createTest();
//asociateTest();
//createAndAssociateTest();
//workerFetchTest();
//associate2();
//workerFetchTest()
//removeAssociationTest();
workerFetchTest();