import React, { useState, useEffect } from "react";
import { connect } from 'dva';
import styles from './addUser.scss';

function AddUser(props) {

    return <div className={styles.wrapper}>
        <p className={styles.title}>添加用户</p>
        <div className={styles.wrap}>
            <div className={styles.wrap_item}>
                <div className={styles.tits}>
                    <p>添加用户</p>
                    <p>更新用户</p>
                </div>
                <div>
                    <input type="text" placeholder="请输入用户名" />
                    <input type="text" placeholder="请输入密码" />
                    <select>
                        <option>请选择身份id</option>
                        <option>管理员</option>
                        <option>出题者</option>
                        <option>浏览者</option>
                    </select>
                    <div>
                        <button>确定添加</button>
                        <button>重置</button>
                    </div>
                </div>
                <div>
                    <select>
                        <option>请选择身份id</option>
                        <option>管理员</option>
                        <option>出题者</option>
                        <option>浏览者</option>
                    </select>
                    <input type="text" placeholder="请输入用户名" />
                    <input type="text" placeholder="请输入密码" />
                    <select>
                        <option>请选择身份id</option>
                        <option>管理员</option>
                        <option>出题者</option>
                        <option>浏览者</option>
                    </select>
                    <div>
                        <button>确定添加</button>
                        <p>重置</p>
                    </div>
                </div>
            </div>
            <div className={styles.wrap_item}>
                <p>添加身份</p>
                <input type="text" placeholder="请输入身份名称" />
                <div>
                    <button>确定添加</button>
                    <p>重置</p>
                </div>
            </div>
            <div className={styles.wrap_item}>
                <p>添加api接口权限</p>
                <input type="text" placeholder="请输入api接口权限名称" />
                <input type="text" placeholder="请输入api接口权限url" />
                <input type="text" placeholder="请输入api接口权限方法" />
                <div>
                    <button>确定添加</button>
                    <p>重置</p>
                </div>
            </div>
            <div className={styles.wrap_item}>
                <p>添加视图接口权限</p>
                <select>
                    <option>请选择已有视图</option>
                    <option>管理员</option>
                    <option>出题者</option>
                    <option>浏览者</option>
                </select>
                <div>
                    <button>确定添加</button>
                    <p>重置</p>
                </div>
            </div>
            <div className={styles.wrap_item}>
                <p>给身份设置api接口权限</p>
                <select>
                    <option>请选择身份id</option>
                    <option>管理员</option>
                    <option>出题者</option>
                    <option>浏览者</option>
                </select>
                <select>
                    <option>请选择api接口权限</option>
                    <option>管理员</option>
                    <option>出题者</option>
                    <option>浏览者</option>
                </select>
                <div>
                    <button>确定添加</button>
                    <p>重置</p>
                </div>
            </div>
            <div className={styles.wrap_item}>
                <p>给身份设置视图权限</p>
                <select>
                    <option>请选择身份id</option>
                    <option>管理员</option>
                    <option>出题者</option>
                    <option>浏览者</option>
                </select>
                <select>
                    <option>请选择视图权限id</option>
                    <option>管理员</option>
                    <option>出题者</option>
                    <option>浏览者</option>
                </select>
                <div>
                    <button>确定添加</button>
                    <p>重置</p>
                </div>
            </div>
        </div>
    </div>
}

const mapStateToProps = state=>{
    return {
    }
  }
  
  const mapDisaptchToProps = dispatch=>{
    return {
    }
  }

export default connect(mapStateToProps, mapDisaptchToProps)(AddUser);
