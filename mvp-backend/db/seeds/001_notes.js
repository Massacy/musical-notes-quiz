/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('notes').del()
    await knex('notes').insert([
        {abcjs_name: "E,", iso_name: "e3", midi_name: 52, ledger_line_nb: -3},
        {abcjs_name: "F,", iso_name: "f3", midi_name: 53, ledger_line_nb: -3},
        {abcjs_name: "G,", iso_name: "g3", midi_name: 55, ledger_line_nb: -2},
        {abcjs_name: "A,", iso_name: "a3", midi_name: 57, ledger_line_nb: -2},
        {abcjs_name: "B,", iso_name: "b3", midi_name: 59, ledger_line_nb: -1},
        {abcjs_name: "C", iso_name: "c4", midi_name: 60, ledger_line_nb: -1},
        {abcjs_name: "D", iso_name: "d4", midi_name: 62, ledger_line_nb: 0},
        {abcjs_name: "E", iso_name: "e4", midi_name: 64, ledger_line_nb: 0},
        {abcjs_name: "F", iso_name: "f4", midi_name: 65, ledger_line_nb: 0},
        {abcjs_name: "G", iso_name: "g4", midi_name: 67, ledger_line_nb: 0},
        {abcjs_name: "A", iso_name: "a4", midi_name: 69, ledger_line_nb: 0},
        {abcjs_name: "B", iso_name: "b4", midi_name: 71, ledger_line_nb: 0},
        {abcjs_name: "c", iso_name: "c5", midi_name: 72, ledger_line_nb: 0},
        {abcjs_name: "d", iso_name: "d5", midi_name: 74, ledger_line_nb: 0},
        {abcjs_name: "e", iso_name: "e5", midi_name: 76, ledger_line_nb: 0},
        {abcjs_name: "f", iso_name: "f5", midi_name: 77, ledger_line_nb: 0},
        {abcjs_name: "g", iso_name: "g5", midi_name: 79, ledger_line_nb: 0},
        {abcjs_name: "a", iso_name: "a5", midi_name: 81, ledger_line_nb: 1},
        {abcjs_name: "b", iso_name: "b5", midi_name: 83, ledger_line_nb: 1},
        {abcjs_name: "c'", iso_name: "c6", midi_name: 84, ledger_line_nb: 2},
        {abcjs_name: "d'", iso_name: "d6", midi_name: 86, ledger_line_nb: 2},
        {abcjs_name: "e'", iso_name: "e6", midi_name: 88, ledger_line_nb: 3},
        {abcjs_name: "f'", iso_name: "f6", midi_name: 89, ledger_line_nb: 3},
    ]);
};
