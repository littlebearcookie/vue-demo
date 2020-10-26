<template>
  <div class="container my-3">
    <div class="mb-2 input-group">
      <input
        type="text"
        class="form-control"
        v-model="note_detail"
        :placeholder="$t('Home.__enterNote')"
      />
      <div class="input-group-append">
        <button class="btn btn-success" type="button" @click="addNote()">
          {{ $t("Home.__add") }}
        </button>
      </div>
    </div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th style="width: 60%">{{ $t("Home.__note") }}</th>
          <th style="width: 20%">{{ $t("Home.__modifiedTime") }}</th>
          <th style="width: 20%"></th>
        </tr>
      </thead>
      <tbody v-if="notes.length != 0">
        <tr v-for="(note, i) in notes" :key="i">
          <td>
            <template v-if="i == editIndex">
              <input type="text" v-model="note.detail" />
            </template>
            <template v-else>{{ note.detail }}</template>
          </td>
          <td>{{ note.time | transformTime() }}</td>
          <td>
            <template v-if="i == editIndex">
              <button class="btn btn-sm btn-success" @click="editNote(i)">
                {{ $t("Home.__save") }}
              </button>
              <button class="btn btn-sm btn-light" @click="editIndex = null">
                {{ $t("Home.__cancel") }}
              </button>
            </template>
            <template v-else>
              <button class="btn btn-sm btn-warning" @click="editIndex = i">
                {{ $t("Home.__edit") }}
              </button>
              <button
                type="button"
                class="btn btn-sm btn-danger"
                @click="delNote(i)"
              >
                {{ $t("Home.__delete") }}
              </button></template
            >
          </td>
        </tr>
      </tbody>
      <tbody v-else>
        <tr>
          <td colspan="3" class="text-center">{{ $t("Home.__noNote") }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      notes: [],
      note_detail: "",
      editIndex: null,
    };
  },
  created() {
    this.getNotes();
  },
  filters: {
    transformTime: function (val) {
      let date = new Date(val * 1000);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    },
  },
  methods: {
    getNotes() {
      this.notes = this.$session.has("notes") ? this.$session.get("notes") : [];
    },
    addNote() {
      var note = {
        detail: this.note_detail,
        time: Math.floor(Date.now() / 1000),
      };
      if (this.$session.has("notes")) {
        var temp = this.$session.get("notes");
        temp.push(note);
        this.$session.set("notes", temp);
      } else {
        this.$session.set("notes", [note]);
      }
      this.getNotes();
    },
    editNote(i) {
      this.notes[i].time = Math.floor(Date.now() / 1000);
      this.$session.set("notes", this.notes);
      this.editIndex = null;
      this.getNotes();
    },
    delNote(i) {
      var temp = this.$session.get("notes");
      temp.splice(i, 1);
      this.$session.set("notes", temp);
      this.getNotes();
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
