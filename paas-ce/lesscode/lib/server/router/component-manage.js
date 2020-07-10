/**
 * Tencent is pleased to support the open source community by making 蓝鲸智云PaaS平台社区版 (BlueKing PaaS Community Edition) available.
 * Copyright (C) 2017-2018 THL A29 Limited, a Tencent company. All rights reserved.
 * Licensed under the MIT License (the "License"); you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * http://opensource.org/licenses/MIT
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

// const { saveAsFile, formatCode, deleteTmpFile } = require('../controller/vue-code')
const Router = require('koa-router')
const {
    list,
    useing,
    create,
    update,
    compDelete
} = require('../controller/component-manage')

const router = new Router({
    prefix: '/api/componentManage'
})

router.get('/list', list)
router.get('/useing', useing)
router.post('/create', create)
router.get('/update', update)
router.get('/delete', compDelete)

module.exports = router
