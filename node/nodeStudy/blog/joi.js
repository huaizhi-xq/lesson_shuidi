// 引入joi
const Joi = require('joi');

// 定义对象的验证规则
const schema = {
  username: Joi.string().min(2).max(5).required().error(new Error('username属性没有通过验证')),
  birth: Joi.number().min(1900).max(2020)
};

async function run() {
  try {
    // 实施验证
    await Joi.validate({username: 'ba', birth: 19988}, schema);
  } catch (ex) {
    console.log(ex.message);
    return
  }
  console.log('验证通过');
}

run();
             // {{each users}}
//   <tr>
//       <td>{{$valuse._id}}</td>
//       <td>{{$valuse.username}}</td>
//       <td>{{$valuse.email}}</td>
//       <td>{{$valuse.role}}</td>
//       <td>{{$valuse.state}}</td>
//       <td>
//           <a href="user-edit.html" class="glyphicon glyphicon-edit"></a>
//           <i class="glyphicon glyphicon-remove" data-toggle="modal" data-target=".confirm-modal"></i>
//       </td>
//   </tr>
// {{/each}}