/*
MIT License

Copyright (c) 2023 Mathis Gauthey

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

module.exports = {
  SelectFromAllTasks: SelectFromAllTasks,
  GetAllTasksFromProject: GetAllTasksFromProject,
  GetAllTasksFromSection: GetAllTasksFromSection,
};

const getTodoistPluginApi = (t) =>
  t.plugins.plugins["todoist-sync-plugin"].services.todoist.api.value;
async function SelectFromAllTasks(t) {
  const s = await getAllTasks(t);
  if (0 === s.length) return void new Notice("No tasks.");
  const e = await selectTasks(t, s);
  return await closeSelectedTasks(t.app, e), formatTasksToTasksPluginTask(e);
}
async function GetAllTasksFromProject(t) {
  const [s, e] = await Promise.all([getAllTasks(t), getProjects(t.app)]),
    a = await t.quickAddApi.suggester(
      (t) => (
        (t.tasks = s.filter((s) => s.projectID === t.id)),
        `${t.name} (${t.tasks.length})`
      ),
      e
    );
  if (a) {
    if (0 !== a.tasks.length)
      return (
        new Notice(`Added ${a.tasks.length} tasks from '${a.name}'.`),
        await closeSelectedTasks(t.app, a.tasks),
        formatTasksToTasksPluginTask(a.tasks)
      );
    new Notice(`No tasks in '${a.name}'.`);
  }
}
async function GetAllTasksFromSection(t) {
  const [s, e, a] = await Promise.all([
      getProjects(t.app),
      getSections(t.app),
      getAllTasks(t),
    ]),
    n = await t.quickAddApi.suggester((t) => {
      const e = s.find((s) => s.id === t.project_id);
      return (
        (t.tasks = a.filter((s) => s.sectionID === t.id)),
        `${e.name} > ${t.name} (${t.tasks.length})`
      );
    }, e);
  if (0 !== n.tasks.length)
    return (
      new Notice(`Added ${n.tasks.length} tasks from '${n.name}'.`),
      await closeSelectedTasks(n.tasks),
      formatTasksToTasksPluginTask(n.tasks)
    );
  new Notice(`No tasks in '${n.name}'.`);
}
async function getAllTasks(t) {
  const s = getTodoistPluginApi(t.app);
  e = await s.getTasks();
  return e;
}
async function selectTasks(t, s) {
  const e = await t.quickAddApi.checkboxPrompt(s.map((t) => t.content));
  return s.filter((t) => e.some((s) => s.contains(t.content)));
}
async function closeSelectedTasks(t, s) {
  const e = getTodoistPluginApi(t);
  s.forEach(async (t) => await e.closeTask(t.id));
}
function formatTasksToTasksPluginTask(t) {
  const todayDate = moment().format("YYYY-MM-DD HH:mm:ss");
  return t.map((t) => `- ${t.content}`).join("\n");
}
async function getTasksGroupedByProject(t) {
  const s = getTodoistPluginApi(t),
    { ok: e } = await s.getTasksGroupedByProject();
  return e;
}
async function getProjects(t) {
  const s = getTodoistPluginApi(t),
    { ok: e } = await s.getProjects();
  return e;
}
async function getSections(t) {
  const s = getTodoistPluginApi(t),
    { ok: e } = await s.getSections();
  return e;
}
