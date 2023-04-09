# Mensch ärgere dich nicht

🎲 Good old _Mensch ärgere dich nicht_ written in React.

## Roadmap

```yaml
- Step 1: Define the rules and game mechanics.
- Step 2: Design the game board and pieces.
- Step 3: Set up a React project using create-react-app with TypeScript template.
- Step 4: Create the game board component.
  - Step 4.1: Define the grid layout for the game board.
  - Step 4.2: Create the squares for the game board.
  - Step 4.3: Define the positions of the start and end squares for each player.
  - Step 4.4: Add event handlers for user interactions with the board.
- Step 5: Create the game pieces component.
  - Step 5.1: Define the different types of game pieces.
  - Step 5.2: Create the pieces using SVG or other graphics.
- Step 6: Add logic for game mechanics and player turns.
  - Step 6.1: Define the game rules and win conditions.
  - Step 6.2: Add logic to update the game state based on player actions.
  - Step 6.3: Use TypeScript to define the types of game state and player actions.
- Step 7: Implement game AI if necessary.
- Step 8: Add animations and effects for user feedback.
- Step 9: Test and debug the game.
- Step 10: Deploy the game to a web server or hosting service.
```

## Rules and game mechanics

```yaml
- Objective: The objective of the game is to be the first player to move all four of their pieces from their starting position to their end position.
- Players: The game can be played with 2-4 players.
- Setup:
      - Each player chooses a color and takes four pieces of that color.
      - The pieces are placed in the player's home zone, which is the corner of the board with the corresponding color.
- Gameplay:
      - The game is played in a clockwise direction.
      - Players take turns rolling the dice and moving one of their pieces the number of spaces indicated by the dice.
      - A piece can only move forward and cannot move onto a space occupied by another piece of the same color.
      - If a player's piece lands on a space occupied by an opponent's piece, the opponent's piece is knocked off the board and sent back to their home zone.
      - If a player rolls a six, they get to roll again.
      - If a player cannot move any of their pieces, they forfeit their turn.
- Winning:
      - The first player to move all four of their pieces to their end position wins the game.
      - If two or more players reach their end position on the same turn, the player who got there with the highest roll wins.
- Additional Rules:
      - A player can only enter the board with a six.
      - A player cannot move a piece into their end position if it would cause them to overshoot it.
      - A player cannot move a piece into their home zone if it would cause them to overshoot it.
      - A player cannot knock off their own pieces.
```

## Technologies

```yaml
- React:
      - Used to create a fast, scalable, and dynamic user interface for the game.
      - Allows for the creation of reusable UI components that can be easily rendered and updated.
- TypeScript:
      - Used to add type checking and interfaces to the codebase, improving code safety and maintainability.
      - Helps to catch errors at compile-time rather than runtime.
- SCSS:
      - Used to create modular and maintainable stylesheets for the game.
      - Allows for variables, mixins, and nesting to improve code reusability.
- Redux:
      - Used to manage the state of the game in a centralized and predictable way.
      - Enables easy data sharing between components without prop drilling.
- Jest:
      - Used to write and run unit tests for the game codebase.
      - Provides a simple and flexible way to ensure code correctness and prevent regressions.
- Playwright:
      - Used to automate end-to-end testing of the game in multiple browsers.
      - Allows for the creation of reliable and repeatable tests for the game's functionality.
- Storybook:
      - Used to build and test UI components in isolation.
      - Allows for documentation and showcase of UI components for easier collaboration and maintenance.
- Socket.io:
      - Used to enable real-time, bidirectional communication between clients and server for multiplayer game features.
      - Allows for the creation of a responsive and interactive multiplayer game experience.
```
