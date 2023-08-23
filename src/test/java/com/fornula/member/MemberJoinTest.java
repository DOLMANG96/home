package com.fornula.member;

import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.support.GenericXmlApplicationContext;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.fornula.domain.member.dto.Member;
import com.fornula.domain.member.join.MemberDTO;
import com.fornula.domain.member.join.MemberJoinMapper;
import com.fornula.domain.member.join.MemberJoinRepository;
import com.fornula.domain.member.join.MemberJoinRepositoryImpl;

import org.apache.ibatis.session.SqlSession;
import org.junit.Test;
@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
public class MemberJoinTest {

	@Autowired
	MemberJoinRepository repository;
	
	
	
	
	
	@Test
	public void memberJoin() {
		MemberDTO memberDTO = new MemberDTO();
		
		memberDTO.setId("1");
		memberDTO.setPassword("1");
		memberDTO.setEmail("1");
		memberDTO.setMemberfile_name("1");
		memberDTO.setCategory_one(3);
		memberDTO.setCategory_two(2);
		memberDTO.setCategory_three(1);
		
		
		repository.join(memberDTO);
	}
}
