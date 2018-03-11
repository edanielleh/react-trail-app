'use strict';
const db = require('../index');
const Sequelize = require('sequelize');

const Trails = db.define('trails', {
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    difficulty : {
        type: Sequelize.ENUM,
        values: ["easy", "moderate", "hard"],
        allowNull: false
    },
    type : {
        type: Sequelize.ENUM,
        values: ["out-and-back", "loop"],
        allowNull: false
    },
    length : {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lat : {
        type: Sequelize.FLOAT(5),
        allowNull: false
    },
    lng : {
        type: Sequelize.FLOAT(5),
        allowNull: false
    }
    
}, {
    timestamps: false,  // don't add the timestamp attributes (updatedAt, createdAt)
    }
);

module.exports = Trails;