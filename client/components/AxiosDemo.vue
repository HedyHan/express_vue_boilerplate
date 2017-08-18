<template>
    <div>
        <Button
                type="primary"
                shape="circle"
                @click="onClick"
        > {{ buttonValue }} </Button>

        <Button
                v-show="hasData"
                type="ghost"
                shape="circle"
                @click="onClose"
        >
            <Icon type="close-round"></Icon>
        </Button>

        <Table
                v-show="hasData"
                width="800"
                class="custom-table"
                :columns="columns"
                :data="list"
        ></Table>
    </div>
</template>

<script>
    import USER from '../../user.config'

    export default {
        data(){
          return {
              hasData: false,
              buttonValue: 'Get Sessions',
              columns: [
                  {
                      title: 'Session ID',
                      key: 'uuid',
                      width: 300
                  },
                  {
                      title: 'Label',
                      key: 'label'

                  },
                  {
                      title: 'Type',
                      key: 'type'

                  },
                  {
                      title: 'Time',
                      key: 'time',
                      width: 300
                  }
              ],
              list:[]
          }
        },
        name: 'AxiosDemo',
        methods: {
            onClick () {
                this.$ajax({
                    url: '/sessions',
                    baseURL: 'https://api.realtimecat.com/v0.4/',
                    method: 'get',
                    headers: {
                        'X-RTCAT-APIKEY': USER.APIKEY,
                        'X-RTCAT-SECRET': USER.SECRET
                    }
                })
                    .then((res)=>{
                        const data = res.data.results;
                        const length = this.list.length;
                        this.list.splice(0, length);

                        data.map((d)=>{
                            this.list.push({
                                uuid: d.uuid,
                                type: d.type,
                                label: d.label,
                                time: d['time_created']
                            })
                        });
                        this.hasData = true;
                        this.buttonValue= 'Update';
                    })
            },
            onClose () {
                this.hasData = false;
                this.buttonValue= 'Update';
            }
        },
        beforeUpdate () {
            //
        }
    }
</script>

<style>
    .custom-table {
        width: 800px;
        margin: 20px auto;
    }
</style>