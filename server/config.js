module.exports = {
    PORT: 3100,
    GRID: {
        WIDTH: 12,
        HEIGHT: 20,
        PADDING: {
            VERTICAL: 10,
            HORIZONTAL: 10,
        },
        LINE_WIDTH: 1,
        WALL_DEPTH: 100,
    },
    GOAL: {
        WIDTH: 8, // number of grid squares
    },
    DISC: {
        DIAMETER: 1.95, // as a percentage of block height/width
        BOUNCE_SPEEDUP: 0.55, // add this amount to disc speed after each bounce
        INITIAL_SPEED: 2.00,
        MAX_SPEED: 20.00,
        MOVE_DELAY: 750, // delay before moving; in ms
    },
    TICK_FAST_INTERVAL: 50,
    WINNING_SCORE: 7,
    WIN_SCREEN_TIMEOUT: 7000,  // time that the player stays on the win/loss scree before starting new game
    MAX_PLACED_BLOCKS: 3,
    GOAL_SAFE_ZONE: 5,
};
