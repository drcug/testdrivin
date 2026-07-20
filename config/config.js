/**
 * Costanti di bilanciamento — Esame di Guida Napoli VGA v2
 */
window.GAME_CONFIG = {
    GOAL_DISTANCE: 1500,
    GOAL_DISTANCE_TRAINING: 400,
    SPEED_LIMIT: 50,
    SPEED_LIMIT_EASY: 60,
    SCORE_START: 100,
    SCORE_PASS: 70,
    SCORE_RESERVE: 50,
    STORAGE_KEY: 'patenteBestScore_v2',
    STORAGE_STATS_KEY: 'patenteStats_v2',
    PENALTIES: {
        stopMiss: 5,
        speeding: 2,
        navNoIndicator: 8,
        navWrongTurn: 15,
        hornAbuse: 3,
        parkingCone: 5,
        policeFine: 10,
        offRoad: 3,
        tailgating: 4,
        busStopMiss: 6
    },
    PENALTY_COOLDOWNS: {
        speeding: 3,
        hornAbuse: 1.5,
        offRoad: 3,
        tailgating: 2
    },
    SAFE_DISTANCE_Z: 8,
    SPAWN_INTERVAL: 55,
    SPAWN_INTERVAL_TRAINING: 70,
    PRUNE_EVERY_FRAMES: 120
};
