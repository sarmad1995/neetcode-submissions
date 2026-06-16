class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board, word) {
        const n = board.length;
        const m = board[0].length;

        const visited = [];
        for (let i = 0; i < n; i++) {
            visited[i] = [];
            for (let j = 0; j < m; j++) {
                visited[i][j] = false;
            }
        }

        for (let i = 0; i < n; i++) {
            for (let j = 0; j < m; j++) {
                if (board[i][j] === word[0]) {
                    const found = this.backtrack(board, word, i, j, 0, visited);
                    if (found) {
                        return true;
                    }
                }
            }
        }
        return false;
    }

    backtrack(board, word, r, c, idx, visited) {
        const n = board.length;
        const m = board[0].length;
        if (r < 0 || c < 0 || r === n || c === m) {
            return false;
        }
        if (visited[r][c]) {
            return false;
        }
        if (board[r][c] !== word[idx]) {
            return false;
        }

        visited[r][c] = true;

        if(idx === word.length -1) {
            return true
        }

        let t = this.backtrack(board, word, r + 1, c, idx + 1, visited);
        let b = this.backtrack(board, word, r - 1, c, idx + 1, visited);
        let left = this.backtrack(board, word, r, c - 1, idx + 1, visited);
        let right = this.backtrack(board, word, r, c + 1, idx + 1, visited);
        visited[r][c] = false;
        return t || b || left || right;
    }
}
