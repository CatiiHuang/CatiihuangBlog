# 恢复数据
mongorestore --db tao ./dump/tao
# 恢复后配置DB账号
# mongosh
# use admin
# db.createUser({
#   user: "catii",
#   pwd: "gqgq******",
#   roles: [
#     { role: "readWrite", db: "tao" },
#     { role: "readWrite", db: "admin" } // 可选：如果需要管理权限
#   ]
# })
